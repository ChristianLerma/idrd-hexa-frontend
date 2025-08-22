# app/infrastructure

Esta carpeta contiene la implementación de la **capa de infraestructura** de la aplicación, siguiendo los principios de la arquitectura hexagonal (puertos y adaptadores).

## ¿Qué contiene esta carpeta?

- **adapters/primary/**  
  Adaptadores primarios, como controladores o interfaces que reciben solicitudes externas (por ejemplo, desde la capa de presentación).

- **adapters/secondary/**  
  Adaptadores secundarios, como la persistencia de datos (bases de datos), servicios externos o APIs de terceros.

- **configuration/**  
  Configuración específica de la infraestructura, como la inyección de dependencias y la definición de proveedores.

## Objetivo

El objetivo de esta capa es aislar la lógica de negocio del dominio de los detalles técnicos y de los sistemas externos, facilitando el mantenimiento, la escalabilidad y la capacidad de prueba de la aplicación.

## Implementaciones Específicas en este Proyecto

Dentro de este proyecto, la capa de infraestructura maneja:

- **Repositorios de Datos:** Aquí se encuentra la implementación concreta del `MaterialRepository` (en `adapters/secondary/persistence/`), que se comunica con una API externa (HTTP) para gestionar los datos de los materiales.
- **Mapeo de Entidades:** Los mappers (como `material.mapper.ts`) se encargan de convertir los datos crudos de la API en las entidades de dominio que utiliza la aplicación, y viceversa.
- **Inyección de Dependencias:** El fichero `configuration/dependency-injection.ts` es crucial, ya que aquí se configuran los proveedores de Angular para inyectar las implementaciones concretas (de esta capa) donde se esperan las abstracciones (puertos) definidas en la capa de aplicación. Esto desacopla eficazmente las capas.

## Buenas prácticas

- No incluir lógica de negocio en esta carpeta.
- Mantener los adaptadores desacoplados del dominio.
- Centralizar la configuración técnica y los proveedores aquí.

## Ejemplo de estructura

```
infrastructure/
├── adapters/
│   ├── primary/
│   └── secondary/
├── configuration/
```