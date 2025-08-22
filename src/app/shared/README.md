# Shared Layer

Esta carpeta contiene código que es **compartido a través de todas las capas** de la aplicación (domain, application, infrastructure, presentation).

## Regla Fundamental

El código en esta carpeta debe ser verdaderamente agnóstico y genérico. **No debe tener dependencias de ninguna capa específica**. Por ejemplo, un `util` aquí no debería depender de un servicio de Angular o de una entidad del dominio. Su propósito es proporcionar funcionalidades comunes y transversales.

## Estructura de Carpetas

### `/constants`

Contiene valores constantes que se utilizan en toda la aplicación.
- **Ejemplos:** Nombres de rutas, claves de almacenamiento local, valores por defecto, etc.

### `/guards`

Contiene los guardas de rutas de Angular (`CanActivate`, `CanDeactivate`, etc.). Se colocan aquí porque, aunque son parte de la infraestructura de enrutamiento de Angular, a menudo necesitan acceder a la lógica de la aplicación o del dominio para tomar decisiones, actuando como un punto de cruce.

### `/types`

Define tipos e interfaces de TypeScript genéricos que pueden ser utilizados en cualquier parte de la aplicación.
- **Ejemplos:** Tipos para respuestas de API paginadas, tuplas genéricas, etc.

### `/utils`

Contiene funciones de utilidad puras y genéricas.
- **Ejemplos:** Funciones para formatear fechas, validadores de formularios personalizados, cálculos matemáticos, etc. Una función de utilidad debe ser una función pura: para la misma entrada, siempre produce la misma salida y no tiene efectos secundarios.
