import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Material } from '@domain/entities/material.entity';
import { MaterialRepository } from '@domain/repositories/material.repository';
import { CreateMaterialDto, MaterialResponseDto } from '@dto/material';

@Injectable({
  providedIn: 'root'
})
export class CreateMaterialUseCase {
  constructor(private readonly materialRepository: MaterialRepository) {}

  execute(createMaterialDto: CreateMaterialDto): Observable<MaterialResponseDto> {
    return this.materialRepository.existeConCodigo(createMaterialDto.codigo).pipe(
      switchMap(existe => {
        if (existe) {
          return throwError(() => new Error(`Ya existe un material con el codigo "${createMaterialDto.codigo}"`));
        }

        try {
          const nuevoMaterial = Material.crear(createMaterialDto);

          return this.materialRepository.create(nuevoMaterial);
        } catch (error) {
          return throwError(() => error);
        }
      }),
      map(material => this.mapToResponseDto(material))
    );
  }

  private mapToResponseDto(material: Material): MaterialResponseDto {
    return {
      id: material.id,
      codigo: material.codigo,
      descripcion: material.descripcion,
      unidad: material.unidad,
      precio: material.precio,
      createdAt: material.createdAt,
      updatedAt: material.updatedAt,
      deletedAt: material.deletedAt,
    };
  }
}
