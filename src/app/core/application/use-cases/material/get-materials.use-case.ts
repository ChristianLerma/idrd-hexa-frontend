// src/app/core/application/use-cases/material/get-materials.use-case.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Material } from '../../../domain/entities/material.entity';
import { MaterialRepository } from '../../../domain/repositories/material.repository';
import { MaterialFilterDto, MaterialResponseDto } from '../../dto/material';

@Injectable({
  providedIn: 'root'
})
export class GetMaterialsUseCase {
  constructor(private materialRepository: MaterialRepository) {}

  execute(filtros?: MaterialFilterDto): Observable<MaterialResponseDto[]> {
    return this.materialRepository.findAll(filtros).pipe(
      map(materiales => materiales.map(material => this.mapToResponseDto(material)))
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
