# Arquitectura de la Aplicación

Esta carpeta (`src/app`) contiene el código fuente principal de la aplicación, organizado siguiendo los principios de la **Arquitectura Hexagonal** (también conocida como Arquitectura de Puertos y Adaptadores).

## Objetivo de la Arquitectura Hexagonal

El objetivo principal es crear una aplicación altamente desacoplada, mantenible y testeable, aislando la lógica de negocio central (el "Core" o "Dominio") de los detalles técnicos y de la infraestructura (bases de datos, frameworks web, APIs externas, UI).

Esto se logra definiendo "puertos" (interfaces) en el dominio y la capa de aplicación, y "adaptadores" (implementaciones concretas) en la capa de infraestructura y presentación que se conectan a estos puertos. Las dependencias siempre fluyen hacia el interior.

## Estructura de Capas

La aplicación se divide en las siguientes capas principales:

### 1. `core/` (El Hexágono Interior)

Contiene el corazón de la aplicación, completamente agnóstico a la tecnología y a la infraestructura. Se subdivide en:

-   **`domain/`**: Define las entidades de negocio, las reglas de negocio y los puertos de salida (interfaces de repositorios, servicios externos). Es el lenguaje ubicuo de la aplicación.
-   **`application/`**: Contiene los casos de uso (`use cases`) que orquestan la lógica de negocio. Define los puertos de entrada (interfaces para los casos de uso) y los DTOs (Data Transfer Objects) para la comunicación entre capas.

**Dependencias:** `domain` no depende de nada. `application` depende de `domain`.

### 2. `infrastructure/` (Adaptadores Secundarios y Configuración)

Implementa los puertos de salida definidos en la capa de `domain`. Contiene los detalles técnicos de cómo la aplicación interactúa con el mundo exterior.

-   **`adapters/secondary/`**: Implementaciones concretas de los repositorios (ej: `material-http.repository.impl.ts` para interactuar con una API REST).
-   **`configuration/`**: Configuración de la inyección de dependencias, donde se "conectan" los puertos con sus adaptadores.

**Dependencias:** Depende de `core/domain` y `core/application`.

### 3. `presentation/` (Adaptadores Primarios y UI)

La capa más externa, responsable de la interfaz de usuario y de cómo el usuario interactúa con la aplicación. Implementa los puertos de entrada definidos en la capa de `application`.

-   **`components/`**: Componentes de UI reutilizables ("dumb components").
-   **`pages/`**: Componentes que representan vistas completas ("smart components"), que orquestan la interacción del usuario y llaman a los casos de uso.
-   **`layouts/`**: Estructuras de diseño comunes para las páginas.
-   **`services/`**: Servicios específicos de la UI (gestión de estado de la vista, comunicación entre componentes).

**Dependencias:** Depende de `core/application` (para llamar a los casos de uso) y `shared`.

### 4. `shared/` (Funcionalidades Transversales)

Contiene código genérico y reutilizable que no pertenece a ninguna capa específica y puede ser utilizado por todas ellas.

-   **`constants/`**: Valores constantes.
-   **`guards/`**: Guardas de rutas de Angular.
-   **`types/`**: Definiciones de tipos e interfaces genéricas.
-   **`utils/`**: Funciones de utilidad puras.

**Dependencias:** No debe depender de ninguna otra capa del proyecto.

## Flujo de Dependencias (Regla de la Arquitectura Hexagonal)

Las dependencias siempre fluyen hacia el interior:

`Presentation` -> `Application` -> `Domain`
`Infrastructure` -> `Domain`
`Infrastructure` -> `Application`
`Shared` -> (ninguna capa del proyecto)

Esto asegura que el `core` de la aplicación permanezca independiente de los detalles externos, facilitando su evolución y testeo.
