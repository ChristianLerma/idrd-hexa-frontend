# Primary Adapter: REST

Esta carpeta contiene los adaptadores primarios que exponen la funcionalidad de la aplicación a través de una **API REST**.

## Responsabilidad

Los componentes en esta carpeta (generalmente controladores o `controllers`) se encargan de:

1.  Recibir peticiones HTTP (GET, POST, PUT, DELETE, etc.) desde clientes externos.
2.  Validar y transformar los datos de entrada (DTOs - Data Transfer Objects).
3.  Invocar los casos de uso correspondientes en la capa de `aplicación`.
4.  Manejar las respuestas (éxito o error) y devolverlas al cliente con los códigos de estado HTTP apropiados.

## Nota

En una aplicación de frontend pura como Angular, es **poco común** que esta carpeta tenga contenido, ya que el frontend actúa como el cliente que *consume* una API REST, no como el que la *provee*. Sin embargo, se mantiene por convención arquitectónica o para posibles escenarios de backend-for-frontend (BFF) o integración con herramientas.