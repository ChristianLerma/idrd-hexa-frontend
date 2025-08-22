# Shared Types

Esta carpeta contiene definiciones de `interfaces` y `types` de TypeScript que son genéricos y reutilizables en toda la aplicación.

## Responsabilidad

El propósito de esta carpeta es proporcionar un lugar central para las estructuras de datos comunes que no son parte del núcleo del dominio de negocio, pero que son utilizadas por múltiples capas.

Ayuda a mantener la consistencia y a evitar la duplicación de definiciones de tipos.

## ¿Qué tipo de definiciones van aquí?

- **Estructuras de API genéricas:** Como un objeto de respuesta paginada que puede contener cualquier tipo de dato.
- **Tipos de UI genéricos:** Como la estructura de un item para un menú desplegable (`{ id: string; label: string; }`).
- **Tipos de utilidad:** Tipos condicionales, tuplas, o tipos mapeados que puedan ser de utilidad general.

## Diferencia con las Entidades del Dominio

Es importante no confundir estos tipos con las **entidades del dominio** (que se encuentran en `core/domain/entities`).

- **Entidades del Dominio:** Representan los conceptos centrales de negocio (ej: `Material`), pueden contener lógica de negocio y son el corazón de la aplicación.
- **Tipos Compartidos:** Son simplemente "formas" de datos. No tienen métodos ni lógica de negocio. Son estructuras de datos pasivas.

## Ejemplo

`api.types.ts`
```typescript
export interface PaginatedResponse<T> {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  items: T[];
}
```

`forms.types.ts`
```typescript
export type FormControlStatus = 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
```
