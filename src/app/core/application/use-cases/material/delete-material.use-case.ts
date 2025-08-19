import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MaterialRepository } from '../../../domain/repositories/material.repository';
import { Material } from '../../../domain/entities/material.entity';

export interface DeleteMaterialResult {
  success: boolean;
  message: string;
  deletedId: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeleteMaterialUseCase {
  constructor(private materialRepository: MaterialRepository) {}

  execute(id: string): Observable<DeleteMaterialResult> {
    return this.materialRepository.findById(id).pipe(
      switchMap(material => {
        if (!material) {
          return throwError(() => new Error(`Material con ID "${id}" no encontrado`));
        }

        const materialDesactivado = Material.actualizar(material, { deletedAt: new Date() });

        return this.materialRepository.update(materialDesactivado).pipe(
          switchMap(() => [{
            success: true,
            message: `Material "${material.codigo}" eliminado correctamente`,
            deletedId: id
          }])
        );
      })
    );
  }
}
