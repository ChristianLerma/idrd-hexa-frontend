# Presentation Services

Esta carpeta contiene servicios de Angular cuya responsabilidad está **estrictamente limitada a la capa de presentación**.

## Responsabilidad

A diferencia de los casos de uso en la capa de `aplicación` (que orquestan la lógica de negocio), los servicios de presentación se encargan de la **lógica de la interfaz de usuario (UI)** que no es adecuada para vivir dentro de un solo componente.

No deben contener reglas de negocio.

## Casos de Uso Comunes

### 1. Gestión de Estado de la UI
Para estados complejos de la UI que necesitan ser compartidos por varios componentes (incluso no relacionados jerárquicamente). Por ejemplo:
- Un servicio que gestiona si un panel lateral está abierto o cerrado.
- Un servicio que mantiene el estado de un formulario de varios pasos.

### 2. Comunicación entre Componentes (Message Bus)
Cuando componentes no relacionados necesitan comunicarse, un servicio puede actuar como un intermediario (un "message bus" o "event bus") usando `Subjects` o `Observables` de RxJS.

### 3. Lógica de Vista Compleja
Para encapsular lógica de UI que es demasiado compleja para un componente de página ("smart component"). Por ejemplo, la lógica para construir un gráfico dinámico basado en la interacción del usuario.

## Ejemplo

```typescript
// theme.service.ts - Un servicio para cambiar entre tema claro y oscuro

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal<boolean>(false);

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    // Lógica para aplicar el tema al DOM...
  }
}
```
En este ejemplo, el `ThemeService` gestiona un estado puramente de UI (el tema visual) y la lógica para aplicarlo, sin involucrar ninguna regla de negocio del dominio.
