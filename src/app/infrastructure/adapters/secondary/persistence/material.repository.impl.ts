// src/app/infrastructure/adapters/secondary/persistence/material.repository.impl.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { MaterialRepository } from '../../../../core/domain/repositories/material.repository';
import { Material } from '../../../../core/domain/entities/material.entity';
import { MaterialFilterDto } from '../../../../core/application/dto/material';
import { MaterialMapper } from '../database/mappers/material.mapper';
import { MaterialEntityDB } from '../database/entities/material.entity.db';

/**
 * Implementación en memoria del repositorio de materiales
 * Para desarrollo y testing. En producción se reemplazaría por una implementación con base de datos real.
 */
@Injectable({
  providedIn: 'root'
})
export class MaterialRepositoryImpl extends MaterialRepository {

  // Simulación de base de datos en memoria
  private materiales: MaterialEntityDB[] = [
    {
      id: 'MAT_001',
      codigo: 'COD_01',
      descripcion: 'Cemento de alta calidad para construcción',
      unidad: 'Kg',
      precio: 15.50,
      updatedAt: new Date('2024-01-15').toISOString(),
      createdAt: new Date('2024-01-15').toISOString()
    },
    {
      id: 'MAT_002',
      codigo: 'COD_02',
      descripcion: 'Varilla corrugada para refuerzo estructural',
      unidad: 'm',
      precio: 8.75,
      updatedAt: new Date('2024-01-15').toISOString(),
      createdAt: new Date('2024-01-15').toISOString()
    },
    {
      id: 'MAT_003',
      codigo: 'COD_03',
      descripcion: 'Pintura interior de alta cobertura',
      unidad: 'L',
      precio: 25.90,
      updatedAt: new Date('2024-01-15').toISOString(),
      createdAt: new Date('2024-01-15').toISOString()
    }
  ];

  findAll(filtros?: MaterialFilterDto): Observable<Material[]> {
    let materialesFiltrados = [...this.materiales];

    if (filtros) {
      if (filtros.codigo) {
        materialesFiltrados = materialesFiltrados.filter(
          m => m.codigo.toLowerCase().includes(filtros.codigo!.toLowerCase())
        );
      }
    }

    // Simular delay de base de datos
    return of(MaterialMapper.toDomainList(materialesFiltrados)).pipe(delay(300));
  }

  findById(id: string): Observable<Material | null> {
    const material = this.materiales.find(m => m.id === id);

    if (material) {
      return of(MaterialMapper.toDomain(material)).pipe(delay(200));
    }

    return of(null).pipe(delay(200));
  }

  create(material: Material): Observable<Material> {
    const materialDB = MaterialMapper.toDB(material);

    // Verificar que no existe el ID (no debería pasar en condiciones normales)
    const existe = this.materiales.find(m => m.id === materialDB.id);
    if (existe) {
      return throwError(() => new Error(`Material con ID ${materialDB.id} ya existe`));
    }

    // Agregar a la "base de datos"
    this.materiales.push(materialDB);

    // Simular delay de base de datos
    return of(MaterialMapper.toDomain(materialDB)).pipe(delay(400));
  }

  update(material: Material): Observable<Material> {
    const materialDB = MaterialMapper.toUpdateDB(material);
    const index = this.materiales.findIndex(m => m.id === materialDB.id);

    if (index === -1) {
      return throwError(() => new Error(`Material con ID ${materialDB.id} no encontrado`));
    }

    // Mantener fecha de creación
    const fechaCreacion = this.materiales[index].createdAt;

    // Actualizar el material
    this.materiales[index] = {
      id: materialDB.id,
      codigo: materialDB.codigo ?? '',
      descripcion: materialDB.descripcion ?? '',
      unidad: materialDB.unidad ?? '',
      precio: materialDB.precio ?? 0,
      createdAt: fechaCreacion,
      updatedAt: materialDB.updatedAt,
      deletedAt: materialDB.deletedAt ?? null,
    };

    // Simular delay de base de datos
    return of(MaterialMapper.toDomain(this.materiales[index])).pipe(delay(400));
  }

  delete(id: string): Observable<boolean> {
    const index = this.materiales.findIndex(m => m.id === id);

    if (index === -1) {
      return throwError(() => new Error(`Material con ID ${id} no encontrado`));
    }

    // Eliminar de la "base de datos"
    this.materiales.splice(index, 1);

    // Simular delay de base de datos
    return of(true).pipe(delay(300));
  }

  existeConCodigo(codigo: string, excludeId?: string): Observable<boolean> {
    const existe = this.materiales.some(m =>
      m.codigo.toLowerCase() === codigo.toLowerCase() &&
      m.id !== excludeId
    );

    return of(existe).pipe(delay(200));
  }

  /**
   * Limpia todos los datos (útil para testing)
   */
  clear(): Observable<boolean> {
    this.materiales = [];
    return of(true);
  }

  /**
   * Obtiene el conteo total de materiales
   */
  count(): Observable<number> {
    return of(this.materiales.length);
  }

  /**
   * Seed con datos de prueba
   */
  seedData(): Observable<boolean> {
    // Los datos iniciales ya están en el constructor
    return of(true);
  }
}
