# Puertos de la Aplicación (Ports)

## Descripción

En la arquitectura hexagonal, los **puertos (ports)** son la pieza central que permite el desacoplamiento entre el núcleo de la aplicación (dominio y casos de uso) y el mundo exterior (UI, bases de datos, servicios externos). Un puerto es simplemente una **interfaz** que define un contrato de interacción.

Esta carpeta contiene las interfaces que actúan como los límites de nuestra aplicación.

## Tipos de Puertos

Existen dos tipos principales de puertos:

### 1. Puertos de Entrada (Input Ports / Driving Ports)

Los puertos de entrada definen cómo los actores externos (como la capa de presentación, un controlador API, o un script de consola) pueden interactuar con la aplicación. Exponen las capacidades del sistema al mundo exterior.

-   **Qué son**: Interfaces que representan los casos de uso de la aplicación.
-   **Quién los implementa**: Las clases de casos de uso (`...UseCase.ts`) en la capa de aplicación.
-   **Quién los usa**: Los adaptadores primarios (o de entrada) en la capa de infraestructura (ej: un componente de Angular, un controlador de API REST).

*Ejemplo: Una interfaz `ICreateMaterialUseCase` que define un método `execute(data: CreateMaterialDTO)`. La clase `CreateMaterialUseCase` implementaría esta interfaz.*

### 2. Puertos de Salida (Output Ports / Driven Ports)

Los puertos de salida definen los requisitos que la aplicación tiene del exterior para poder funcionar. Son las interfaces que el núcleo de la aplicación necesita que alguien más implemente.

-   **Qué son**: Interfaces para servicios externos como bases de datos, sistemas de archivos, APIs de terceros, etc. Las interfaces de los repositorios (`MaterialRepository` en la capa de dominio) son el ejemplo más común.

-   **Quién los implementa**: Los adaptadores secundarios (o de salida) en la capa de infraestructura (ej: `MaterialHttpRepositoryImpl`).
-   **Quién los usa**: Los casos de uso y, a veces, las entidades del dominio.

Al depender de estas interfaces (puertos) en lugar de implementaciones concretas, el núcleo de la aplicación permanece aislado y agnóstico a la tecnología, lo que facilita las pruebas, el mantenimiento y la evolución del sistema.