# Core de la Aplicación (The Hexagon)

## Descripción

La carpeta `core` representa el **núcleo** de la aplicación en una arquitectura hexagonal. Contiene la lógica de negocio fundamental y es completamente independiente de las tecnologías externas (UI, bases de datos, frameworks).

Su objetivo principal es encapsular las reglas de negocio y los casos de uso, asegurando que el corazón de la aplicación permanezca puro y agnóstico a los detalles de implementación.

## Principios Clave

### 1. Independencia del Dominio

El `core` es el centro de la aplicación. No tiene dependencias directas de frameworks web, bases de datos específicas o librerías de UI. Solo interactúa con el mundo exterior a través de **puertos (interfaces)**, lo que permite que sea fácilmente testeable y adaptable a diferentes contextos tecnológicos.

### 2. Inversión de Dependencias

Las dependencias siempre apuntan hacia el `core`. Esto significa que las capas externas (infraestructura, presentación) dependen de las interfaces definidas en el `core`, pero el `core` no depende de sus implementaciones concretas.

### 3. Desacoplamiento tecnológico

El `core` se enfoca en *qué* hace el negocio, no en *cómo* se hace. Esto lo hace altamente reutilizable y resistente a los cambios tecnológicos.

## Estructura Interna

-   **`application`**: Contiene los casos de uso (use cases) y los DTOs (Data Transfer Objects). Orquesta la lógica de negocio y coordina las interacciones entre el dominio y la infraestructura.
-   **`domain`**: Contiene las entidades, value objects y las interfaces de repositorio. Es la definición pura del modelo de negocio y sus reglas.

Este `core` es el cerebro de la aplicación, asegurando que la lógica de negocio sea robusta, mantenible y adaptable, siguiendo los principios de la arquitectura hexagonal.
