import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { MaterialRepository } from '../../../../core/domain/repositories/material.repository';
import { Material } from '../../../../core/domain/entities/material.entity';
import { MaterialFilterDto } from '../../../../core/application/dto/material';
import { MaterialMapper } from '../database/mappers/material.mapper';
import { MaterialEntityDB } from '../database/entities/material.entity.db';

/**
 * Implementación del repositorio que consume una API REST
 * Esta implementación se usaría en producción conectando con un backend real
 */
@Injectable({
  providedIn: 'root'
})
export class MaterialHttpRepositoryImpl extends MaterialRepository {

  private readonly baseUrl = '/api/v1/materiales';

  constructor(private readonly http: HttpClient) {
    super();
  }

  findAll(filtros?: MaterialFilterDto): Observable<Material[]> {
    let params = new HttpParams();

    if (filtros) {
      if (filtros.codigo) {
        params = params.set('codigo', filtros.codigo);
      }
    }

    return this.http.get<MaterialEntityDB[]>(this.baseUrl, { params }).pipe(
      map(materialesDB => MaterialMapper.toDomainList(materialesDB)),
      catchError(this.handleError)
    );
  }

  findById(id: string): Observable<Material | null> {
    return this.http.get<MaterialEntityDB>(`${this.baseUrl}/${id}`).pipe(
      map(materialDB => materialDB ? MaterialMapper.toDomain(materialDB) : null),
      catchError(error => {
        if (error.status === 404) {
          return [null];
        }
        return this.handleError(error);
      })
    );
  }

  create(material: Material): Observable<Material> {
    const materialDB = MaterialMapper.toCreateDB(material);

    return this.http.post<MaterialEntityDB>(this.baseUrl, materialDB).pipe(
      map(createdMaterialDB => MaterialMapper.toDomain(createdMaterialDB)),
      catchError(this.handleError)
    );
  }

  update(material: Material): Observable<Material> {
    const materialDB = MaterialMapper.toUpdateDB(material);

    return this.http.put<MaterialEntityDB>(`${this.baseUrl}/${material.id}`, materialDB).pipe(
      map(updatedMaterialDB => MaterialMapper.toDomain(updatedMaterialDB)),
      catchError(this.handleError)
    );
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      map(() => true),
      catchError(this.handleError)
    );
  }

  existeConCodigo(codigo: string, excludeId?: string): Observable<boolean> {
    let params = new HttpParams().set('codigo', codigo);

    if (excludeId) {
      params = params.set('excludeId', excludeId);
    }

    return this.http.get<{ existe: boolean }>(`${this.baseUrl}/existe-codigo`, { params }).pipe(
      map(response => response.existe),
      catchError(this.handleError)
    );
  }

  /**
   * Manejo centralizado de errores HTTP
   */
  private readonly handleError = (error: any): Observable<never> => {
    console.error('Error en MaterialHttpRepository:', error);

    let errorMessage: string;

    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.message) {
      errorMessage = error.message;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = 'Datos inválidos';
          break;
        case 401:
          errorMessage = 'No autorizado';
          break;
        case 403:
          errorMessage = 'Acceso denegado';
          break;
        case 404:
          errorMessage = 'Recurso no encontrado';
          break;
        case 409:
          errorMessage = 'Conflicto - El recurso ya existe';
          break;
        case 500:
          errorMessage = 'Error interno del servidor';
          break;
        default:
          errorMessage = `Error HTTP ${error.status}: ${error.statusText}`;
      }
    }

    throw new Error(errorMessage ?? 'Error desconocido');
  };
}
