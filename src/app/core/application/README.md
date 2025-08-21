# Capa de Aplicación (Application Layer)

## Descripción

La capa de aplicación es el corazón de la lógica de negocio de la aplicación. Su principal responsabilidad es **orquestar los casos de uso** y coordinar las interacciones entre el dominio y la infraestructura. Es la capa que define las funcionalidades que la aplicación expone a sus usuarios o a otros sistemas.

Esta capa no contiene lógica de negocio del dominio (reglas de negocio fundamentales), sino que utiliza los servicios y entidades del dominio para cumplir con los casos de uso.

## Estructura

La capa de aplicación se organiza en las siguientes carpetas:

### `dto` (Data Transfer Objects)

Contiene los objetos de transferencia de datos que se utilizan para pasar información entre la capa de presentación (o cualquier cliente) y los casos de uso. Estos DTOs definen la estructura de los datos de entrada y salida de las operaciones de la aplicación.

### `ports` (Puertos)

Define las interfaces (puertos) que deben ser implementadas por los adaptadores de la capa de infraestructura. Estos puertos establecen el contrato que la capa de aplicación espera para interactuar con sistemas externos, como bases de datos, servicios web, etc.

### `use-cases` (Casos de Uso)

Implementa la lógica de negocio específica de la aplicación. Cada caso de uso representa una acción o un flujo de trabajo completo en el sistema (por ejemplo, `CrearMaterialUseCase`, `ObtenerMaterialesUseCase`).

Los casos de uso dependen de las abstracciones (puertos) y no de las implementaciones concretas de la capa de infraestructura, siguiendo el principio de inversión de dependencias.

## Principios Clave

-   **Orquestación**: Coordina las entidades y servicios del dominio para realizar tareas.
-   **Abstracción**: Depende de interfaces (puertos) en lugar de implementaciones concretas.
-   **Aislamiento**: Está completamente aislada de la capa de presentación y de los detalles de la infraestructura.
-   **Definición de Funcionalidades**: Articula claramente las capacidades que la aplicación ofrece.