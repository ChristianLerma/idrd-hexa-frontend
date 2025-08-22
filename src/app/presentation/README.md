# Presentation Layer

Esta carpeta contiene todo lo relacionado con la interfaz de usuario (UI). Su única responsabilidad es mostrar la información al usuario y capturar sus interacciones.

## Principios Clave

- **Desacoplamiento:** La capa de presentación no debe contener lógica de negocio. Su rol es delegar las acciones del usuario a la capa de `aplicación` (a través de los adaptadores primarios o directamente llamando a los casos de uso).
- **Component-Based:** La UI se construye a partir de componentes reutilizables.

## Estructura de Carpetas

### `/components`

Contiene componentes de UI reutilizables, a menudo llamados "dumb components" o "presentational components".

- **Responsabilidad:** Mostrar datos y emitir eventos cuando el usuario interactúa con ellos.
- **Características:**
    - Reciben datos a través de `@Input()`.
    - Exponen eventos a través de `@Output()`.
    - No tienen dependencias directas con los servicios o casos de uso de la aplicación.
    - **Ejemplos en este proyecto:** `material-card`, `header`.

### `/pages`

Contiene los "smart components" o "container components". Representan una página completa o una funcionalidad principal de la aplicación.

- **Responsabilidad:**
    - Actuar como contenedores para los componentes de UI.
    - Comunicarse con la capa de `aplicación` para obtener datos y ejecutar acciones.
    - Gestionar el estado de la vista.
- **Ejemplos en este proyecto:** `material-list`.

### `/layouts`

Contiene componentes que definen la estructura general de la página (por ejemplo, `main-layout` con cabecera, pie de página y una sección para el contenido principal). Esto ayuda a mantener una apariencia consistente en toda la aplicación.

### `/services`

Contiene servicios de Angular específicos de la capa de presentación. Estos servicios pueden ayudar a gestionar el estado de la UI, la comunicación entre componentes no relacionados directamente o la lógica de vista compleja que no pertenece a un solo componente.
