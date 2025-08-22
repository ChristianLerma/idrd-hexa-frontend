# Reusable UI Components (Dumb Components)

Esta carpeta contiene **componentes de UI reutilizables**, también conocidos como "componentes tontos" (Dumb Components) o "componentes de presentación".

## Responsabilidad

La única responsabilidad de estos componentes es **presentar datos y delegar eventos**. No contienen lógica de negocio ni se comunican directamente con los servicios o casos de uso de la aplicación.

## Características Principales

- **Entrada de datos (`@Input`):** Reciben los datos que necesitan para renderizarse desde un componente padre (generalmente un "smart component" de la carpeta `/pages`).
- **Salida de eventos (`@Output`):** Cuando el usuario interactúa con ellos (por ejemplo, hace clic en un botón), emiten un evento que el componente padre puede escuchar y manejar.
- **Reutilizables:** Están diseñados para ser genéricos y poder utilizarse en diferentes partes de la aplicación.
- **Aislados:** No tienen dependencias de servicios de Angular, stores de estado o endpoints de API. Esto los hace muy fáciles de probar y mantener.

## Estructura

Los componentes aquí pueden organizarse por funcionalidad o por nivel de compartición.

- **`shared/`**: Para componentes verdaderamente globales que se pueden usar en cualquier parte de la aplicación (ej: `header`, `button`, `input`).
- **Por Módulo/Funcionalidad**: Para componentes que pertenecen a una característica específica pero que son reutilizables dentro de ella (ej: `material/material-card`).

Esta separación asegura que la lógica de la aplicación permanezca en los "smart components" (`/pages`), manteniendo estos componentes de presentación limpios y enfocados en la UI.
