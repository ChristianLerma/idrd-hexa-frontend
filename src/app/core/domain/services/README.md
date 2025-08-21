# Servicios del Dominio (Domain Services)

## Descripción

Esta carpeta contiene los **servicios del dominio**. Un servicio del dominio es una clase que encapsula lógica de negocio que no pertenece naturalmente a una entidad o a un objeto de valor. Esto ocurre típicamente cuando la lógica:

-   Involucra a múltiples entidades o agregados.
-   Representa una operación de negocio significativa que no es parte del ciclo de vida de una sola entidad.
-   Es una operación que no tiene un estado propio, sino que coordina el comportamiento de otros objetos del dominio.

Los servicios del dominio son agnósticos a la infraestructura y a la aplicación; operan exclusivamente sobre objetos del dominio.

## Propósito

-   **Coordinación de Lógica Compleja**: Permiten agrupar y coordinar lógica de negocio que abarca varias entidades o que es un proceso de negocio en sí mismo.
-   **Evitar Anemia del Dominio**: Ayudan a mantener las entidades enfocadas en su propio comportamiento y estado, evitando que se carguen con responsabilidades que no les corresponden.
-   **Lenguaje Ubicuo**: Al igual que las entidades, los servicios del dominio deben reflejar el lenguaje del negocio.

## Ejemplo

```typescript
// en app/core/domain/services/material-domain.service.ts

import { Material } from '../entities/material.entity';
import { MaterialRepository } from '../repositories/material.repository';

export class MaterialDomainService {
  constructor(private materialRepository: MaterialRepository) {}

  // Ejemplo: Lógica que involucra múltiples materiales o un proceso de negocio
  async transferMaterial(
    materialId: string,
    fromLocation: string,
    toLocation: string,
    quantity: number
  ): Promise<Material> {
    // Lógica de negocio compleja que podría involucrar validaciones,
    // interacción con el repositorio, etc.
    const material = await this.materialRepository.findById(materialId);
    if (!material) {
      throw new Error('Material not found'); // Usar una excepción de dominio real
    }

    // Lógica de transferencia (ejemplo simplificado)
    // material.updateLocation(fromLocation, toLocation);
    // material.decreaseQuantity(quantity); // Si la entidad tuviera este método

    // await this.materialRepository.save(material);
    return material;
  }
}
```

Los servicios del dominio son una herramienta poderosa para modelar el comportamiento complejo del negocio que no encaja directamente en las entidades.
