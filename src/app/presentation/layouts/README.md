# Layout Components

Esta carpeta contiene los **componentes de diseño o "Layouts"**.

## Responsabilidad

Los layouts son componentes de Angular que definen la **estructura visual común** para diferentes páginas de la aplicación. Su objetivo es evitar la duplicación de código estructural como cabeceras, pies de página, barras laterales, menús de navegación, etc.

Un layout envuelve el contenido específico de una ruta.

## ¿Cómo funcionan?

Generalmente, un componente de layout:
1.  Define el HTML estructural (header, footer, etc.).
2.  Utiliza `<ng-content></ng-content>` como un marcador de posición donde Angular proyectará el contenido de la página que se está renderizando en ese momento.

## Ejemplo de un Template de Layout

Un layout `main-layout.component.html` podría verse así:

```html
<app-header></app-header>

<main class="main-content">
  <!-- El componente de la página actual (ej: material-list) se insertará aquí -->
  <ng-content></ng-content>
</main>

<app-footer></app-footer>
```

## Uso en el Enrutador

Estos layouts se aplican generalmente en el módulo de enrutamiento de Angular. Se puede tener una ruta padre que utilice el componente de layout, y rutas hijas que rendericen sus componentes dentro del `<ng-content>` del layout.

```typescript
// Ejemplo de uso en app.routes.ts
{
  path: '',
  component: MainLayoutComponent, // El layout actúa como contenedor
  children: [
    { path: 'materials', component: MaterialListComponent },
    { path: 'dashboard', component: DashboardComponent },
    // ... otras rutas que usan el mismo layout
  ]
}
```
