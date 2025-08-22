# Constants

Esta carpeta almacena valores constantes que se utilizan en múltiples partes de la aplicación.

## Propósito

Centralizar las constantes en un solo lugar ayuda a:
- **Evitar "Magic Strings/Numbers"**: Previene el uso de valores literales dispersos por el código, que son difíciles de mantener y propensos a errores.
- **Facilitar Cambios**: Si un valor necesita ser actualizado (como la URL de una API), solo se necesita cambiar en un único lugar.
- **Mejorar la Legibilidad**: Usar un nombre de constante descriptivo (ej: `API_BASE_URL`) es más claro que ver una URL directamente en el código.

## ¿Qué tipo de constantes van aquí?

- **URLs de API**: Endpoints base, rutas específicas.
- **Rutas de la Aplicación**: Paths para el enrutador de Angular.
- **Claves de Almacenamiento**: Keys para `localStorage` o `sessionStorage`.
- **Valores por Defecto**: Configuraciones por defecto, como el número de ítems por página en una tabla.
- **Textos Fijos**: Mensajes de error comunes, etiquetas que no cambian (aunque para internacionalización (i18n) se usaría otro sistema).

## Organización

Es una buena práctica organizar las constantes en archivos separados por dominio o funcionalidad.

**Ejemplo:**

`api.constants.ts`
```typescript
export const API_BASE_URL = 'https://mi-api.com/v1';
export const MATERIALS_ENDPOINT = `${API_BASE_URL}/materials`;
```

`routes.constants.ts`
```typescript
export const APP_ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  MATERIALS: '/materials'
};
```
