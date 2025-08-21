export class Material {
  constructor(
    public readonly id: string,
    public readonly codigo: string,
    public readonly descripcion: string,
    public readonly unidad: string,
    public readonly precio: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly deletedAt: Date | null,
  ) {
    // Validaciones del dominio
    this.validarDatos();
  }

  private validarDatos(): void {
    if (!this.codigo || this.codigo.trim().length === 0) {
      throw new Error('El codigo del material es obligatorio');
    }

    if (!this.descripcion || this.descripcion.trim().length === 0) {
      throw new Error('La descripcion del material es obligatoria');
    }

    if (this.precio <= 0) {
      throw new Error('El precio es obligatoprio');
    }
  }

  // Factory method para crear un nuevo material
  static crear(datos: {
    codigo: string;
    descripcion: string;
    unidad: string;
    precio: number;
  }): Material {
    const id = this.generarId();

    return new Material(
      id,
      datos.codigo.trim(),
      datos.descripcion.trim(),
      datos.unidad.trim(),
      datos.precio,
      new Date(),
      new Date(),
      null
    );
  }

  static actualizar(materialExistente: Material, cambios: Partial<{
    codigo: string;
    descripcion: string;
    unidad: string;
    precio: number;
    updatedAt: Date;
    deletedAt: Date;
  }>): Material {
    return new Material(
      materialExistente.id,
      cambios.codigo?.trim() ?? materialExistente.codigo,
      cambios.descripcion?.trim() ?? materialExistente.descripcion,
      cambios.unidad?.trim() ?? materialExistente.unidad,
      cambios.precio ?? materialExistente.precio,
      materialExistente.createdAt,
      materialExistente.updatedAt,
      materialExistente.deletedAt,
    );
  }

  private static generarId(): string {
    return 'MAT_' + Date.now().toString() + '_' + Math.random().toString(36).substring(2, 9);
  }

  toPlainObject() {
    return {
      id: this.id,
      codigo: this.codigo,
      descripcion: this.descripcion,
      unidad: this.unidad,
      precio: this.precio,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
    };
  }
}
