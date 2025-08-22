# app/infrastructure/adapters/secondary

Esta carpeta contiene los **adaptadores secundarios** de la capa de infraestructura.

## ¿Qué son los adaptadores secundarios?

Son componentes que permiten que la aplicación interactúe con sistemas externos, como bases de datos, servicios de terceros, sistemas de archivos, colas de mensajes, etc.

## Objetivo

Traducir las solicitudes del dominio al formato requerido por los sistemas externos y viceversa, manteniendo el dominio aislado de detalles técnicos y dependencias externas.

## Buenas prácticas

- No incluir lógica de negocio en los adaptadores secundarios.
- Utilizar interfaces (puertos) definidos en el dominio para comunicarse con estos adaptadores.
- Mantener el código desacoplado y fácilmente intercambiable o testeable.

## Ejemplo de estructura

```
secondary/
├── database/
│   ├── material.repository.impl.ts
│   └── ...
├── api/
│   ├── external-service.adapter.ts
│   └──
```
