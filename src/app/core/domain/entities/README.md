# Entidades del Dominio (Entities)

## Descripción

Esta carpeta contiene las **entidades del dominio**. Las entidades son los objetos de negocio fundamentales de la aplicación que poseen una identidad única y persistente a lo largo del tiempo. Encapsulan tanto los atributos como el comportamiento (métodos) que representan las reglas de negocio más importantes y las invariantes del dominio.

Las entidades son el corazón del modelo de dominio y son agnósticas a cualquier detalle de infraestructura o de interfaz de usuario.

## Responsabilidades

-   **Encapsular Reglas de Negocio**: Las entidades deben contener la lógica de negocio que les es intrínseca, asegurando que el estado de la entidad sea siempre válido.
-   **Identidad Única**: Cada entidad tiene una identidad que la distingue de otras entidades, incluso si sus atributos son idénticos.
-   **Comportamiento**: Además de los datos, las entidades exponen métodos que representan las operaciones de negocio que pueden realizar.

## Ejemplo

```typescript
// en app/core/domain/entities/material.entity.ts

export class Material {
  id: string;
  name: string;
  description: string;
  quantity: number;

  constructor(id: string, name: string, description: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.validate(); // Ejemplo de regla de negocio
  }

  private validate(): void {
    if (this.quantity < 0) {
      throw new Error('Quantity cannot be negative');
    }
    // Más reglas de validación de negocio
  }

  updateQuantity(newQuantity: number): void {
    this.quantity = newQuantity;
    this.validate();
  }
}
```

Las entidades son la representación más pura del negocio y son la base sobre la cual se construyen los casos de uso y se interactúa con la infraestructura.
