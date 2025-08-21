# DTOs (Data Transfer Objects)

## Descripción

Esta carpeta contiene los **Objetos de Transferencia de Datos (DTOs)**. Los DTOs son objetos simples que no contienen lógica de negocio y cuyo único propósito es transportar datos entre diferentes capas y procesos, especialmente entre la capa de presentación (o cualquier cliente) y la capa de aplicación (casos de uso).

## Propósito

1.  **Contrato de Datos**: Definen la estructura exacta de los datos que un caso de uso espera como entrada (`Input DTO` o `Request DTO`) y los datos que devuelve como salida (`Output DTO` o `Response DTO`).
2.  **Desacoplamiento**: Evitan que las entidades del dominio se expongan directamente a las capas externas. Esto es crucial para proteger las reglas de negocio y permitir que el dominio evolucione independientemente de cómo se presenten o reciban los datos.
3.  **Claridad y Eficiencia**: Permiten enviar solo la información necesaria, ocultando propiedades internas de las entidades y optimizando la carga de datos.

## Tipos Comunes de DTOs

-   **`create-[entity].dto.ts`**: Contiene los datos necesarios para crear una nueva entidad.
-   **`update-[entity].dto.ts`**: Contiene los datos que se pueden modificar de una entidad existente.
-   **`[entity]-response.dto.ts`**: Define el formato de los datos de una entidad que se devuelve a los clientes.
-   **`[entity]-filter.dto.ts`**: Contiene los parámetros para filtrar o consultar listas de entidades.

Al utilizar DTOs, nos aseguramos de que la capa de aplicación reciba exactamente los datos que necesita para ejecutar un caso de uso y devuelva solo los datos que el cliente debe conocer.