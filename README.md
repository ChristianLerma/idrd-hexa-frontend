# AppProyectos - Arquitectura Hexagonal

Este proyecto implementa una arquitectura hexagonal (Ports and Adapters) en Angular 20.

## Estructura del Proyecto

### ?? Core Layer
- **Domain**: Entidades, Value Objects, Interfaces de repositorios y servicios
- **Application**: Casos de uso y DTOs

### ?? Infrastructure Layer
- **Primary Adapters**: Controllers REST, Resolvers GraphQL, Componentes Web
- **Secondary Adapters**: Implementaciones de repositorios, APIs externas

### ?? Presentation Layer
- Componentes de UI, P�ginas, Layouts y servicios de estado

### ?? Shared Layer
- Utilidades, constantes, tipos y guards compartidos

## Comandos de Desarrollo

\\\ash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Ejecutar tests
ng test

# Build para producci�n
ng build
\\\

## Principios Aplicados

- **Inversi�n de Dependencias**: Las capas internas no dependen de las externas
- **Separaci�n de Responsabilidades**: Cada capa tiene un prop�sito espec�fico
- **Testabilidad**: F�cil testing mediante inyecci�n de dependencias
- **Mantenibilidad**: C�digo organizado y escalable

## Pr�ximos Pasos

1. Implementar entidades del dominio
2. Crear casos de uso
3. Implementar adaptadores
4. Configurar inyecci�n de dependencias
5. Desarrollar componentes de UI
