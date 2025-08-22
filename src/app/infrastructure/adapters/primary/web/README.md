# Primary Adapter: Web

Esta carpeta está destinada a contener adaptadores primarios específicos para la **interfaz de usuario web**.

## Responsabilidad

Los adaptadores aquí son responsables de conectar la capa de `presentación` (los componentes visuales) con la capa de `aplicación` (la lógica de negocio).

Su función principal es:

1.  Capturar eventos de la interfaz de usuario (ej: clics de botón, envíos de formularios).
2.  Orquestar las llamadas a los casos de uso (`use cases`) apropiados de la capa de aplicación.
3.  Pasar los datos necesarios desde la UI a los casos de uso.

## Contexto en Angular

En una aplicación Angular, la línea entre la `presentación` y este tipo de adaptador puede ser delgada. A menudo, los propios "componentes inteligentes" (smart components) de la capa de presentación actúan como este adaptador.

Esta carpeta puede utilizarse para extraer y formalizar esa lógica de "adaptación", manteniendo los componentes de la UI más limpios y centrados únicamente en mostrar datos y emitir eventos.