# Page Components (Smart Components)

Esta carpeta contiene los **componentes de página**, también conocidos como "componentes inteligentes" (Smart Components) o "contenedores" (Containers).

## Responsabilidad

Estos componentes son el "cerebro" de cada vista de la aplicación. Mientras que los componentes en `/components` solo se preocupan por cómo se ven las cosas, los componentes de página se preocupan por **cómo funcionan las cosas**.

Sus responsabilidades principales son:

1.  **Corresponder a una Ruta:** Cada componente de página generalmente se asigna a una ruta en el enrutador de Angular.
2.  **Comunicarse con la Lógica de Negocio:** Son los encargados de inyectar y llamar a los casos de uso (`use cases`) o servicios de la capa de `aplicación` para obtener datos o ejecutar acciones.
3.  **Gestionar el Estado de la Vista:** Mantienen el estado relevante para la página (por ejemplo, la lista de materiales, el estado de carga, los mensajes de error).
4.  **Pasar Datos a Componentes de Presentación:** Una vez que obtienen los datos, los pasan a los "dumb components" (`/components`) a través de `[property-binding]` para que estos los rendericen.
5.  **Manejar Eventos:** Escuchan los eventos emitidos por los "dumb components" (a través de `(event-binding)`) y ejecutan la lógica apropiada en respuesta.

## Ejemplo en este Proyecto

La página `material-list` en `material/features/material-list` es un ejemplo perfecto de un "smart component". Es responsable de:
- Inyectar y usar `GetMaterialsUseCase`.
- Llamar al caso de uso para obtener la lista de materiales.
- Manejar el estado de carga y los posibles errores.
- Pasar la lista de materiales al componente `material-card` para su visualización.

## Estructura

Las páginas se organizan por módulo o funcionalidad principal de la aplicación (por ejemplo, `material`, `project`, etc.).
