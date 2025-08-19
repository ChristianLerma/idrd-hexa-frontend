export interface MaterialEntityDB {
  id: string;
  codigo: string;
  descripcion: string;
  unidad: string;
  precio: number;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export type CreateMaterialEntityDB = Omit<MaterialEntityDB, 'id' | 'createdAt' | 'updatedAt'> & {
  createdAt: string;
};

export type UpdateMaterialEntityDB = Partial<Omit<MaterialEntityDB, 'id' | 'updatedAt'>> & {
  id: string;
  updatedAt: string;
};
