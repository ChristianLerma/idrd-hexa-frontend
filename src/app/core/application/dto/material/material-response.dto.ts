export interface MaterialResponseDto {
  id: string,
  codigo?: string,
  descripcion?: string,
  unidad?: string,
  precio?: number,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date | null,
}
