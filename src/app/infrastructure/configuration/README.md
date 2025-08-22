# Configuration

Esta carpeta contiene los archivos de configuración específicos de la capa de **infraestructura**.

## Responsabilidad Principal

La principal responsabilidad de esta carpeta es gestionar la **Inyección de Dependencias (DI)**.

Aquí es donde se "conectan" las abstracciones (interfaces o puertos) definidas en la capa de `aplicación` con las implementaciones concretas (adaptadores) que residen en la capa de `infraestructura`.

## `dependency-injection.ts`

Este archivo es el corazón de la configuración. Utiliza el sistema de inyección de dependencias de Angular para definir los `providers`.

Por ejemplo, aquí se especifica que cuando una clase solicite una dependencia del tipo `MaterialRepository` (que es un puerto/abstracción), Angular debe inyectar una instancia de `MaterialHttpRepositoryImpl` (que es el adaptador/implementación concreta).

```typescript
// Ejemplo de provider en dependency-injection.ts
{
  provide: MaterialRepository,
  useClass: MaterialHttpRepositoryImpl
}
```

Este mecanismo es fundamental para mantener el desacoplamiento entre la lógica de negocio y los detalles de implementación, permitiendo que los adaptadores se puedan intercambiar fácilmente sin modificar el núcleo de la aplicación.
