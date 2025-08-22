# Carpeta `src/`

Esta carpeta contiene el código fuente de la aplicación Angular. Es el punto de partida para el desarrollo y la compilación del proyecto.

## Contenido Principal

-   **`index.html`**: El archivo HTML principal que sirve como la página de entrada de la aplicación. Aquí es donde se carga el componente raíz de Angular.
-   **`main.ts`**: El archivo de entrada de TypeScript que arranca la aplicación Angular. Contiene la lógica para inicializar el módulo raíz de la aplicación.
-   **`styles.css`**: Archivo para estilos CSS globales que se aplican a toda la aplicación.
-   **`app/`**: **La carpeta más importante**, que contiene todo el código fuente de la aplicación Angular, organizado según la arquitectura hexagonal. Para más detalles sobre la estructura interna de la aplicación, consulta el `README.md` dentro de `app/`.
-   **`public/`**: Contiene activos estáticos como `favicon.ico` y otros recursos que se sirven directamente.

## Flujo de la Aplicación

Cuando la aplicación se carga en el navegador:
1.  Se carga `index.html`.
2.  `main.ts` se ejecuta, inicializando la aplicación Angular.
3.  El componente raíz de la aplicación (definido en `app/app.component.ts`) se carga en el `index.html`.
4.  A partir de ahí, la aplicación gestiona sus rutas, componentes y lógica de negocio.
