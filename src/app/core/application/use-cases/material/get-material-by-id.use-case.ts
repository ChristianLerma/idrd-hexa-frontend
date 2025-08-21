import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Material } from '@domain/entities/material.entity';
import { MaterialRepository } from '@domain/repositories/material.repository';
import { MaterialResponseDto } from '@dto/material';

@Injectable({
  providedIn: 'root'
})
export class GetMaterialByIdUseCase {
  constructor(private materialRepository: MaterialRepository) {}

  execute(id: string): Observable<MaterialResponseDto | null> {
    return this.materialRepository.findById(id).pipe(
      map(material => material ? this.mapToResponseDto(material) : null)
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
