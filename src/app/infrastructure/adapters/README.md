# Adapters

En el contexto de la Arquitectura Hexagonal, los **adaptadores** son los componentes que conectan la aplicación con el mundo exterior. Actúan como un puente entre los puertos de la aplicación y los sistemas externos.

Esta carpeta se divide en dos tipos de adaptadores:

## 1. Primary Adapters (Adaptadores Primarios o "Driving Adapters")

Son los que **impulsan** la aplicación. Toman la entrada del usuario o de un sistema externo y la envían a la capa de aplicación a través de un puerto de entrada.

- **Ubicación:** `primary/`
- **Ejemplos:**
    - Controladores de una API REST.
    - Componentes de una interfaz de usuario web (como en Angular, React, etc.).
    - Un cliente de línea de comandos (CLI).

En este proyecto, los adaptadores primarios son los componentes de Angular que capturan eventos del usuario y llaman a los casos de uso definidos en la capa de aplicación.

## 2. Secondary Adapters (Adaptadores Secundarios o "Driven Adapters")

Son los que **son impulsados** por la aplicación. Implementan los puertos de salida (repositorios, servicios externos) que la aplicación necesita para funcionar. Son la implementación concreta de las dependencias externas.

- **Ubicación:** `secondary/`
- **Ejemplos:**
    - Implementaciones de repositorios que se conectan a una base de datos (SQL, NoSQL).
    - Clientes HTTP que se comunican con otras APIs.
    - Un adaptador que envía correos electrónicos.

En este proyecto, un ejemplo claro es la implementación del `MaterialRepository` (`material-http.repository.impl.ts`) que se encuentra en `secondary/persistence`, el cual utiliza el cliente HTTP de Angular para comunicarse con un backend.