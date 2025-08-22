import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { GetMaterialsUseCase, CreateMaterialUseCase, UpdateMaterialUseCase, DeleteMaterialUseCase, GetMaterialByIdUseCase } from '@application/use-cases/material/index';
import { Material } from '@domain/entities/material.entity';
import { CommonModule } from '@angular/common';
import { MaterialCardComponent } from '@presentation/components/material/material-card/material-card';
import { ToastrService } from 'ngx-toastr';
import { CreateMaterialDto } from '@application/dto/material/create-material.dto';
import { UpdateMaterialDto } from '@application/dto/material/update-material.dto';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [CommonModule, MaterialCardComponent],
  templateUrl: './material.html',
})

export class MaterialComponent implements OnInit {
  materials: WritableSignal<Material[]> = signal([]);

  constructor(
    private readonly getMaterialsUseCase: GetMaterialsUseCase,
    private readonly createMaterialUseCase: CreateMaterialUseCase,
    private readonly updateMaterialUseCase: UpdateMaterialUseCase,
    private readonly deleteMaterialUseCase: DeleteMaterialUseCase,
    private readonly getMaterialByIdUseCase: GetMaterialByIdUseCase,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.loadMaterials();
  }

  loadMaterials(): void {
    this.getMaterialsUseCase.execute().subscribe(materialsDto => {
      const materials = materialsDto.map(dto => {
        dto.deletedAt = null;
        return new Material(
          dto.id,
          dto.codigo ?? '',
          dto.descripcion ?? '',
          dto.unidad ?? '',
          dto.precio ?? 0,
          dto.createdAt ?? new Date(),
          dto.updatedAt ?? new Date(),
          dto.deletedAt
        );
      });
      this.materials.set(materials);
    });
  }

  createMaterial(dto: CreateMaterialDto): void {
    this.createMaterialUseCase.execute(dto).subscribe(newMaterialDto => {
      const newMaterial = new Material(
        newMaterialDto.id,
        newMaterialDto.codigo ?? '',
        newMaterialDto.descripcion ?? '',
        newMaterialDto.unidad ?? '',
        newMaterialDto.precio ?? 0,
        newMaterialDto.createdAt ?? new Date(),
        newMaterialDto.updatedAt ?? new Date(),
        newMaterialDto.deletedAt ?? null
      );
      this.materials.update(materials => [...materials, newMaterial]);
      this.toastr.success('Material creado correctamente', 'Éxito');
    });
  }

  updateMaterial(id: string, dto: UpdateMaterialDto): void {
    this.updateMaterialUseCase.execute(dto).subscribe(updatedMaterialDto => {
      const updatedMaterial = new Material(
        updatedMaterialDto.id,
        updatedMaterialDto.codigo ?? '',
        updatedMaterialDto.descripcion ?? '',
        updatedMaterialDto.unidad ?? '',
        updatedMaterialDto.precio ?? 0,
        updatedMaterialDto.createdAt ?? new Date(),
        updatedMaterialDto.updatedAt ?? new Date(),
        updatedMaterialDto.deletedAt ?? null
      );
      this.materials.update(materials => {
        const index = materials.findIndex(m => m.id === id);
        if (index !== -1) {
          materials[index] = updatedMaterial;
        }
        return [...materials];
      });
      this.toastr.info('Material actualizado correctamente', 'Éxito');
    });
  }

  deleteMaterial(id: string): void {
    confirm('¿Estás seguro de que deseas eliminar este material?') && this.deleteMaterialUseCase.execute(id).subscribe(result => {
      if (result.success) {
        this.materials.update(materials => materials.filter(material => material.id !== result.deletedId));
        this.toastr.error(result.message, 'Éxito');
      }
    });
  }
}
