# AppProyectos - Arquitectura Hexagonal

## 1. Descripción del Proyecto

Este repositorio contiene el frontend de la aplicación Test para el entendimiento de la arquitectura Hexagonal, desarrollado con Angular y diseñado siguiendo los principios de la Arquitectura Hexagonal (también conocida como Arquitectura de Puertos y Adaptadores). El objetivo es proporcionar una base de código robusta, escalable y fácil de mantener, con una clara separación entre la lógica de negocio y los detalles de implementación.

## 2. Tecnologías y Lenguajes Utilizados

-   ![Angular](https://img.shields.io/badge/-Angular-DD0031?style=flat&logo=angular&logoColor=white) **Angular**: Framework para construir aplicaciones web de una sola página.
-   ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript**: Lenguaje de programación que añade tipado estático a JavaScript.
-   ![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) **Tailwind CSS**: Framework CSS de utilidad para un diseño rápido y personalizado.
-   ![RxJS](https://img.shields.io/badge/-RxJS-B7178C?style=flat&logo=reactivex&logoColor=white) **RxJS**: Librería para programación reactiva usando Observables.
-   ![PostCSS](https://img.shields.io/badge/-PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white) **PostCSS**: Herramienta para transformar CSS con plugins JavaScript.
-   ![Jasmine](https://img.shields.io/badge/-Jasmine-8A4182?style=flat&logo=jasmine&logoColor=white) **Jasmine**: Framework de pruebas de comportamiento para JavaScript.
-   ![Karma](https://img.shields.io/badge/-Karma-5A5A5A?style=flat&logo=karma&logoColor=white) **Karma**: Un ejecutor de pruebas para JavaScript.

## 3. Características

-   **Arquitectura Hexagonal (Puertos y Adaptadores)**: Diseño que aísla la lógica de negocio del dominio de los detalles técnicos y de infraestructura.
-   **Clara Separación de Responsabilidades**: Organización del código en capas bien definidas (Dominio, Aplicación, Infraestructura, Presentación).
-   **Código Escalable y Mantenible**: Facilita la adición de nuevas funcionalidades y la modificación de las existentes con bajo riesgo.
-   **Alta Testabilidad**: El desacoplamiento inherente de la arquitectura permite escribir pruebas unitarias y de integración de manera más sencilla y efectiva.
-   **Desarrollo Frontend Moderno**: Utiliza las últimas versiones de Angular y herramientas de desarrollo eficientes.

## Estructura del Proyecto

La aplicación sigue una arquitectura hexagonal, dividiendo el código en capas con responsabilidades específicas. Para una descripción detallada de cada capa, consulta el `README.md` dentro de la carpeta `src/app/`.

### Core Layer

Contiene la lógica de negocio central de la aplicación, independiente de cualquier detalle técnico o de infraestructura. Se subdivide en `domain` (entidades y reglas de negocio) y `application` (casos de uso y DTOs).

### Infrastructure Layer

Implementa los "puertos" definidos en la capa de `domain` y `application`. Aquí residen los adaptadores que interactúan con bases de datos, APIs externas y otros servicios técnicos.

### Presentation Layer

Responsable de la interfaz de usuario y de cómo el usuario interactúa con la aplicación. Contiene componentes, páginas, layouts y servicios específicos de la UI.

### Shared Layer

Contiene código genérico y reutilizable (constantes, guardas, tipos, utilidades) que puede ser utilizado por todas las capas de la aplicación sin introducir dependencias cruzadas.

## Comandos de Desarrollo

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm start
```

La aplicación se ejecutará en `http://localhost:4200/` (o el puerto configurado por Angular CLI).

### Ejecutar tests

```bash
npm test
```

Ejecuta las pruebas unitarias a través de Karma.

### Build para producción

```bash
npm run build
```

Compila la aplicación para despliegue en producción. Los archivos generados se encontrarán en la carpeta `dist/`.

## Principios Aplicados

-   **Principio de Inversión de Dependencias (DIP)**: Las abstracciones no deben depender de los detalles; los detalles deben depender de las abstracciones.
-   **Principio de Responsabilidad Única (SRP)**: Cada módulo o clase debe tener una única razón para cambiar.
-   **Principios SOLID**: Conjunto de principios de diseño de software que promueven la mantenibilidad y extensibilidad.
-   **Código Limpio (Clean Code)**: Énfasis en la legibilidad, simplicidad y facilidad de comprensión del código.
-   **Alta Cohesión y Bajo Acoplamiento**: Diseño de módulos que realizan una tarea bien definida y tienen mínimas dependencias entre sí.

## 4. Instalación

Para poner en marcha el proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/idrd-hexa-frontend.git # Reemplaza con la URL real de tu repositorio
    cd idrd-hexa-frontend
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta la aplicación en modo desarrollo:**
    ```bash
    npm start
    ```
    Abre tu navegador y navega a `http://localhost:4200/`.

## 5. Scripts Disponibles

Los siguientes scripts están disponibles en `package.json`:

-   `ng`: Alias para el comando `ng` del Angular CLI.
-   `start`: `ng serve` - Inicia el servidor de desarrollo.
-   `build`: `ng build` - Compila la aplicación para producción.
-   `watch`: `ng build --watch --configuration development` - Compila en modo de observación para desarrollo.
-   `test`: `ng test` - Ejecuta las pruebas unitarias.

## 6. Dependencias Principales

Las dependencias clave del proyecto incluyen:

-   `@angular/animations`
-   `@angular/common`
-   `@angular/compiler`
-   `@angular/core`
-   `@angular/forms`
-   `@angular/platform-browser`
-   `@angular/router`
-   `@tailwindcss/postcss`
-   `ngx-toastr`
-   `postcss`
-   `rxjs`
-   `tailwindcss`
-   `tslib`
-   `zone.js`

## 7. Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
