import { Material } from '../../../../../core/domain/entities/material.entity';
import { MaterialEntityDB, CreateMaterialEntityDB, UpdateMaterialEntityDB } from '../entities/material.entity.db';

/**
 * Mapper para convertir entre entidades del dominio y entidades de base de datos
 */
export class MaterialMapper {

  /**
   * Convierte de la entidad de dominio a la entidad de base de datos
   */
  static toDB(domainMaterial: Material): MaterialEntityDB {
    return {
      id: domainMaterial.id,
      codigo: domainMaterial.codigo,
      descripcion: domainMaterial.descripcion,
      unidad: domainMaterial.unidad,
      precio: domainMaterial.precio,
      createdAt: domainMaterial.createdAt.toISOString(),
      updatedAt: domainMaterial.updatedAt?.toISOString(),
      deletedAt: domainMaterial.deletedAt?.toISOString() || null
    };
  }

  /**
   * Convierte de la entidad de base de datos a la entidad de dominio
   */
  static toDomain(dbMaterial: MaterialEntityDB): Material {
    return new Material(
      dbMaterial.id,
      dbMaterial.codigo,
      dbMaterial.descripcion,
      dbMaterial.unidad,
      dbMaterial.precio,
      dbMaterial.createdAt ? new Date(dbMaterial.createdAt) : new Date(0),
      dbMaterial.updatedAt ? new Date(dbMaterial.updatedAt) : new Date(0),
      dbMaterial.deletedAt ? new Date(dbMaterial.deletedAt) : new Date(0)
    );
  }

  /**
   * Convierte de entidad de dominio a entidad de creación en BD
   */
  static toCreateDB(domainMaterial: Material): CreateMaterialEntityDB {
    return {
      codigo: domainMaterial.codigo,
      descripcion: domainMaterial.descripcion,
      unidad: domainMaterial.unidad,
      precio: domainMaterial.precio,
      createdAt: domainMaterial.createdAt.toISOString()
    };
  }

  /**
   * Convierte de entidad de dominio a entidad de actualización en BD
   */
  static toUpdateDB(domainMaterial: Material): UpdateMaterialEntityDB {
    return {
      id: domainMaterial.id,
      codigo: domainMaterial.codigo,
      descripcion: domainMaterial.descripcion,
      unidad: domainMaterial.unidad,
      precio: domainMaterial.precio,
      updatedAt: new Date().toISOString()
    };
  }

  /**
   * Convierte múltiples entidades de BD a entidades de dominio
   */
  static toDomainList(dbMaterials: MaterialEntityDB[]): Material[] {
    return dbMaterials.map(dbMaterial => this.toDomain(dbMaterial));
  }
}
