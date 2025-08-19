# AppProyectos - Arquitectura Hexagonal

Este proyecto implementa una arquitectura hexagonal (Ports and Adapters) en Angular 20.

## Estructura del Proyecto
Estructura de carpetas
src/
├── app/
│   ├── core/                          # Núcleo de la aplicación (Contiene el dominio (entities, value objects, interfaces) y la aplicación (casos de uso))
│   │   ├── domain/
│   │   │   ├── entities/              # Entidades del dominio
│   │   │   │   ├── product.entity.ts
│   │   │   ├── repositories/          # Interfaces de repositorios (Puertos)
│   │   │   │   ├── material.repository.ts
│   │   │   ├── services/              # Interfaces de servicios de dominio
│   │   │   │   ├── notification.service.ts
│   │   │   │   ├── payment.service.ts
│   │   │   │   └── email.service.ts
│   │   │   └── exceptions/            # Excepciones del dominio
│   │   │       ├── domain.exception.ts
│   │   │       ├── user-not-found.exception.ts
│   │   │       └── invalid-email.exception.ts
│   │   └── application/               # Casos de uso (Application Layer)
│   │       ├── use-cases/
│   │       │   ├── material/
│   │       │   │   ├── create-material.use-case.ts
│   │       │   │   ├── delete-material.use-case.ts
│   │       │   │   ├── get-material-by-id.use-case.ts
│   │       │   │   ├── get-materials.use-case.ts
│   │       │   │   ├── update-material.use-case.ts
│   │       │   │   └── index.ts
│   │       │   ├── project/
│   │       ├── ports/                 # Puertos de entrada (Input Ports)
│   │       └── dto/                   # Data Transfer Objects
│   │           └── material/
│   │              ├── create-material.dto.ts
│   │              ├── update-material.dto.ts
│   │              ├── material-filter.dto.ts
│   │              ├── material-response.dto.ts
│   │              └── index.ts
│   ├── infrastructure/                # Adaptadores primarios (controllers, UI) y secundarios (persistence, APIs externas)
│   │   ├── adapters/
│   │   │   ├── primary/               # Adaptadores primarios (Controllers, UI)
│   │   │   │   ├── rest/              # Controladores REST
│   │   │   │   └── web/               # Componentes web
│   │   │   └── secondary/             # Adaptadores secundarios (Persistence, External APIs)
│   │   │       ├── persistence/       # Repositorios concretos
│   │   │       │   ├── material-http.repository.impl.ts
│   │   │       │   └── material.repository.impl.ts
│   │   │       ├── external-apis/     # Servicios externos
│   │   │       └── database/          # Configuración y modelos de BD
│   │   │           ├── entities/      # Entidades de TypeORM/Prisma
│   │   │           │   └── material.entity.db.ts
│   │   │           ├── mappers/       # Mappers entre entidades de dominio y BD
│   │   │           │   └── material.mapper.ts
│   │   │           └── migrations/    # Migraciones de BD
│   │   └── configuration/             # Configuración de inyección de dependencias
│   │       └── dependency-injection.ts
│   ├── shared/                        # Código compartido entre capas
│   │   ├── utils/
│   │   │   ├── logger.util.ts
│   │   │   ├── validation.util.ts
│   │   │   └── date.util.ts
│   │   ├── constants/
│   │   │   ├── error-messages.ts
│   │   │   └── app.constants.ts
│   │   ├── types/
│   │   │   ├── common.types.ts
│   │   │   └── api.types.ts
│   │   └── guards/
│   │       ├── auth.guard.ts
│   │       └── role.guard.ts
│   ├── presentation/                  # Capa de presentación (UI Components, Componentes y páginas de la interfaz de usuario)
│   │   ├── components/
│   │   │   ├── shared/                # Componentes compartidos (Código compartido entre todas las capas)
│   │   │   │   └── header/
│   │   ├── pages/                     # Páginas/Vistas principales
│   │   ├── layouts/                   # Layouts de la aplicación
│   │   └── services/                  # Servicios de UI (State Management)
│   ├── app.component.ts               # Componente raíz
│   ├── app.routes.ts                  # Configuración de rutas
│   └── app.config.ts                  # Configuración de la aplicación
├── assets/                            # Recursos estáticos
├── environments/                      # Variables de entorno
└── main.ts                            # Punto de entrada de la aplicación

### ?? Core Layer
- **Domain**: Entidades, Value Objects, Interfaces de repositorios y servicios
- **Application**: Casos de uso y DTOs

### ?? Infrastructure Layer
- **Primary Adapters**: Controllers REST, Resolvers GraphQL, Componentes Web
- **Secondary Adapters**: Implementaciones de repositorios, APIs externas

### ?? Presentation Layer
- Componentes de UI, Páginas, Layouts y servicios de estado

### ?? Shared Layer
- Utilidades, constantes, tipos y guards compartidos

## Comandos de Desarrollo


# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Ejecutar tests
ng test

# Build para producci�n
ng build

## Principios Aplicados

- **Inyección de Dependencias**: Las capas internas no dependen de las externas
- **Separación de Responsabilidades**: Cada capa tiene un propósito específico
- **Testabilidad**: Fácil testing mediante inyección de dependencias
- **Mantenibilidad**: Código organizado y escalable

## Próximos Pasos

1. Implementar entidades del dominio
2. Crear casos de uso
3. Implementar adaptadores
4. Configurar inyecci�n de dependencias
5. Desarrollar componentes de UI
