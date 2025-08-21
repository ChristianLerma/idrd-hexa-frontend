# Casos de Uso (Use Cases)

## Descripción

Esta carpeta contiene los **casos de uso** de la aplicación. Un caso de uso representa una interacción específica que un usuario o sistema puede realizar. Encapsula y orquesta toda la lógica necesaria para llevar a cabo una tarea de negocio concreta, desde la validación de la entrada hasta la persistencia de los resultados.

Los casos de uso son el corazón de la capa de aplicación y actúan como la implementación de los **puertos de entrada (input ports)**.

## Responsabilidades de un Caso de Uso

1.  **Orquestación**: Un caso de uso no contiene lógica de negocio del dominio (las reglas fundamentales), sino que **orquesta** los objetos del dominio (entidades, value objects) para que la ejecuten.
2.  **Manejo del Flujo**: Controla el flujo de una operación. Por ejemplo, para crear un material:
    -   Recibe un DTO con los datos de entrada.
    -   Utiliza una entidad del dominio para aplicar y validar las reglas de negocio.
    -   Llama a un puerto de salida (como una interfaz de repositorio) para persistir los datos.
    -   Devuelve un DTO de respuesta.
3.  **Dependencia de Abstracciones**: Los casos de uso dependen de las **interfaces** (puertos) definidas en el dominio (para la persistencia) y en la propia capa de aplicación, pero nunca de implementaciones concretas de la capa de infraestructura. Esto garantiza la independencia de la lógica de negocio de los detalles tecnológicos.

## Estructura

-   Cada archivo en esta carpeta suele representar una única acción (ej: `create-material.use-case.ts`, `get-materials.use-case.ts`).
-   Las clases de casos de uso suelen tener un método principal, comúnmente llamado `execute()` o `handle()`, que recibe los datos de entrada (normalmente un DTO) y ejecuta la lógica.

Al aislar la lógica de la aplicación en casos de uso, logramos un sistema más fácil de entender, probar y mantener, donde cada archivo tiene una responsabilidad única y clara.