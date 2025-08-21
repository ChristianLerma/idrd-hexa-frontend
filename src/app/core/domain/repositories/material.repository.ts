import { Observable } from 'rxjs';
import { Material } from '@domain/entities/material.entity';
import { MaterialFilterDto } from '@dto/material';

export abstract class MaterialRepository {
  abstract findAll(filtros?: MaterialFilterDto): Observable<Material[]>;
  abstract findById(id: string): Observable<Material | null>;
  abstract create(material: Material): Observable<Material>;
  abstract update(material: Material): Observable<Material>;
  abstract delete(id: string): Observable<boolean>;
  abstract existeConCodigo(codigo: string, excludeId?: string): Observable<boolean>;
}
