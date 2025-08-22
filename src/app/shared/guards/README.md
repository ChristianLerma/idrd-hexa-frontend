# Route Guards

Esta carpeta contiene los **guardas de rutas** de Angular.

## Responsabilidad

Los guardas son servicios que implementan una o más interfaces de guarda (`CanActivate`, `CanActivateChild`, `CanDeactivate`, `Resolve`) para controlar el acceso a las rutas de la aplicación. Su propósito es ejecutar una lógica de comprobación antes de que una ruta se active o desactive.

Permiten responder a preguntas como:
- ¿Tiene el usuario permiso para acceder a esta página? (`CanActivate`)
- ¿Hay cambios sin guardar en la página actual antes de abandonarla? (`CanDeavtivate`)
- ¿Podemos obtener los datos necesarios para esta página antes de que se renderice? (`Resolve`)

## ¿Por qué en `shared`?

Aunque los guardas son parte de la infraestructura de enrutamiento de Angular, se colocan en `shared` porque a menudo necesitan inyectar y utilizar servicios de capas superiores (como `application` o `domain`) para tomar decisiones. Por ejemplo, un guarda de autenticación necesita consultar un `AuthenticationService` para saber si el usuario ha iniciado sesión.

## Ejemplo de un Guarda de Autenticación

`auth.guard.ts`
```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/application/services/authentication.service'; // Ejemplo

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true; // Permite el acceso a la ruta
  } else {
    // Redirige al login y deniega el acceso
    router.navigate(['/login']);
    return false;
  }
};
```
Este guarda se aplicaría a las rutas que requieren que el usuario esté autenticado en el archivo de configuración de rutas.
