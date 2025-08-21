# Capa de Dominio (Domain Layer)

## Descripción

La capa de dominio es el núcleo del software y contiene la lógica de negocio y las reglas más importantes de la aplicación. Representa el modelo de negocio, independientemente de la tecnología utilizada para la implementación.

Esta capa no debe tener dependencias de ninguna otra capa (como la aplicación o la infraestructura). Su objetivo es encapsular la complejidad del negocio y ser completamente agnóstica a la UI, la base de datos o cualquier servicio externo.

## Estructura

La capa de dominio se organiza en las siguientes carpetas:

### `entities` (Entidades)

Contiene las entidades del dominio, que son los objetos de negocio fundamentales del sistema. Las entidades tienen una identidad única que persiste a lo largo del tiempo y encapsulan atributos y comportamientos (métodos) que representan las reglas de negocio.

Ejemplo: `Material.entity.ts`

### `exceptions` (Excepciones del Dominio)

Contiene las excepciones personalizadas que representan errores o condiciones excepcionales específicas del dominio de negocio, como violaciones de reglas de negocio.

### `repositories` (Repositorios)

Contiene las **interfaces** de los repositorios. Un repositorio define un contrato para la persistencia de las entidades del dominio, abstrayendo los detalles de cómo se almacenan y recuperan los datos.

Las implementaciones concretas de estas interfaces se encuentran en la capa de `infraestructura`. La capa de dominio solo define qué operaciones de persistencia son necesarias para sus agregados.

Ejemplo: `MaterialRepository.ts` (define métodos como `findById`, `save`, `findAll`, etc.)

### `services` (Servicios del Dominio)

Contiene la lógica de negocio que no encaja naturalmente en una entidad o un objeto de valor, a menudo involucrando la coordinación de múltiples entidades o procesos de negocio complejos.

## Principios Clave

-   **Pureza**: Contiene únicamente lógica de negocio pura.
-   **Aislamiento**: No depende de ninguna otra capa.
-   **Encapsulamiento**: Las reglas de negocio están encapsuladas dentro de las entidades y otros objetos de dominio.
-   **Abstracción de la Persistencia**: Define cómo se deben persistir los datos, pero no cómo se hace.