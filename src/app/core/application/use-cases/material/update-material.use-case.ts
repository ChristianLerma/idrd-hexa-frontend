import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Material } from '@domain/entities/material.entity';
import { MaterialRepository } from '@domain/repositories/material.repository';
import { UpdateMaterialDto, MaterialResponseDto } from '@dto/material';

@Injectable({
  providedIn: 'root'
})
export class UpdateMaterialUseCase {
  constructor(private readonly materialRepository: MaterialRepository) {}

  execute(updateMaterialDto: UpdateMaterialDto): Observable<MaterialResponseDto> {
    return this.materialRepository.findById(updateMaterialDto.id).pipe(
      switchMap(materialExistente => {
        if (!materialExistente) {
          return throwError(() => new Error(`Material con ID "${updateMaterialDto.id}" no encontrado`));
        }

        if (updateMaterialDto.codigo && updateMaterialDto.codigo !== materialExistente.codigo) {
          return this.materialRepository.existeConCodigo(updateMaterialDto.codigo, updateMaterialDto.id).pipe(
            switchMap(existe => {
              if (existe) {
                return throwError(() => new Error(`Ya existe un material con el codigo "${updateMaterialDto.codigo}"`));
              }
              return this.actualizarMaterial(materialExistente, updateMaterialDto);
            })
          );
        }
        return this.actualizarMaterial(materialExistente, updateMaterialDto);
      }),
      map(material => this.mapToResponseDto(material))
    );
  }

  private actualizarMaterial(materialExistente: Material, cambios: UpdateMaterialDto): Observable<Material> {
    try {
      const materialActualizado = Material.actualizar(materialExistente, {
        codigo: cambios.codigo,
        descripcion: cambios.descripcion,
        unidad: cambios.unidad,
        precio: cambios.precio,
        updatedAt: new Date(),
      });

      return this.materialRepository.update(materialActualizado);
    } catch (error) {
      return throwError(() => error);
    }
  }

  private mapToResponseDto(material: Material): MaterialResponseDto {
    return {
      id: material.id,
      codigo: material.codigo,
      unidad: material.unidad,
      precio: material.precio,
      createdAt: material.createdAt,
      updatedAt: material.updatedAt,
      deletedAt: material.deletedAt,
    };
  }
}
