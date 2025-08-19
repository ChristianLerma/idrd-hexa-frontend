export interface UpdateMaterialDto {
  id: string,
  codigo?: string,
  descripcion?: string,
  unidad?: string,
  precio?: number,
  updatedAt?: Date,
  deletedAt?: Date | null,
}
