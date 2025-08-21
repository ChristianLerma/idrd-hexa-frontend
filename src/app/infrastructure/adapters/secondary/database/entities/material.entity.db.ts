export interface MaterialEntityDB {
  id: string;
  codigo: string;
  descripcion: string;
  unidad: string;
  precio: number;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}

export type CreateMaterialEntityDB = Omit<MaterialEntityDB, 'id' | 'createdAt' | 'updatedAt'> & {
  createdAt: string;
};

export type UpdateMaterialEntityDB = Partial<Omit<MaterialEntityDB, 'id' | 'updatedAt'>> & {
  id: string;
  updatedAt: Date;
};
