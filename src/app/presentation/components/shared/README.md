# Shared Components

Esta carpeta contiene **componentes de UI compartidos y globales**.

## Definición

Un componente se considera "compartido" (shared) cuando no pertenece a ninguna funcionalidad o módulo específico y puede ser utilizado en cualquier parte de la aplicación. Son la base del sistema de diseño y aseguran una apariencia y comportamiento consistentes.

## Características

- **Alta Reutilización:** Son los componentes más reutilizables del proyecto.
- **Genéricos:** No contienen lógica específica de ningún dominio de negocio.
- **Aislados:** Al igual que todos los componentes de presentación, reciben datos por `@Input` y emiten eventos por `@Output`.

## Ejemplos

- Un componente de botón (`<app-button>`) con diferentes estilos.
- Un campo de entrada de texto (`<app-input>`).
- Modales, spinners, tooltips, etc.
- El componente `header` que se encuentra actualmente en esta carpeta.

## Uso

Para utilizar estos componentes a lo largo de la aplicación, es una buena práctica crear un `SharedModule` en Angular que los declare y exporte. De esta manera, cualquier otro módulo de la aplicación puede simplemente importar el `SharedModule` para tener acceso a todos estos componentes compartidos.
