# Excepciones del Dominio (Domain Exceptions)

## Descripción

Esta carpeta contiene las **excepciones personalizadas** que son específicas del dominio de negocio. Estas excepciones representan errores o condiciones excepcionales que surgen directamente de la violación de las reglas de negocio o de las invariantes del dominio.

Definir las excepciones en el dominio asegura que el lenguaje de error sea coherente con el lenguaje ubicuo del negocio y que la lógica de manejo de errores a nivel de aplicación pueda reaccionar a fallos de negocio específicos.

## Propósito

-   **Claridad del Negocio**: Las excepciones de dominio "hablan" el lenguaje del negocio, haciendo que sea claro *por qué* una operación falló desde una perspectiva de negocio.
-   **Separación de Preocupaciones**: Permiten que el dominio lance errores que son significativos para el negocio, sin acoplarse a detalles de implementación de la infraestructura o de la presentación.
-   **Manejo de Errores Estructurado**: Facilitan un manejo de errores más estructurado y semántico en las capas superiores (aplicación, presentación), permitiendo reaccionar de manera diferente a distintos tipos de fallos de negocio.

## Ejemplo

```typescript
// en app/core/domain/exceptions/material.exception.ts

export class MaterialNotFoundException extends Error {
  constructor(id: string) {
    super(`Material with ID ${id} not found.`);
    this.name = 'MaterialNotFoundException';
  }
}

export class InvalidMaterialQuantityException extends Error {
  constructor(quantity: number) {
    super(`Invalid material quantity: ${quantity}. Quantity must be positive.`);
    this.name = 'InvalidMaterialQuantityException';
  }
}
```

Las excepciones de dominio son una parte integral del modelo de dominio, permitiendo que el comportamiento de error sea tan expresivo como el comportamiento exitoso.
