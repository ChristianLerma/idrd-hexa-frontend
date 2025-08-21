# Repositorios del Dominio (Interfaces)

## Descripción

Esta carpeta contiene las **interfaces** de los repositorios del dominio. Un repositorio es un patrón de diseño que media entre el dominio y las capas de mapeo de datos, actuando como una colección en memoria de objetos del dominio.

El propósito de estas interfaces es definir un contrato claro y explícito sobre las operaciones de persistencia que se pueden realizar con las entidades y agregados del dominio. La capa de aplicación (casos de uso) dependerá de estas interfaces, no de sus implementaciones concretas.

## Responsabilidades

-   Definir los métodos para la persistencia de entidades, como `findById`, `findAll`, `save`, `update`, `delete`, etc.
-   Abstraer completamente los detalles de la tecnología de almacenamiento (SQL, NoSQL, API externa, etc.).
-   Servir como un "puerto de salida" (output port) en la arquitectura hexagonal, permitiendo que la lógica de negocio dicte qué datos necesita sin saber de dónde provienen.

## Nota Importante

Aquí **solo** se definen las interfaces (`.ts` con `export interface ...`). Las clases que **implementan** estas interfaces se encuentran en la capa de `infraestructura`. Este desacoplamiento es clave para mantener el dominio aislado de los detalles tecnológicos.