# Utility Functions

Esta carpeta contiene funciones de utilidad (`utils`) genéricas y reutilizables.

## Regla Principal: Funciones Puras

La regla más importante para cualquier función en esta carpeta es que debe ser una **función pura**. Esto significa:

1.  **Misma entrada, misma salida:** Dados los mismos argumentos, la función siempre debe devolver el mismo resultado.
2.  **Sin efectos secundarios:** La función no debe modificar ningún estado fuera de su propio ámbito. No debe cambiar variables globales, modificar los argumentos que se le pasan (si son objetos o arrays), hacer llamadas a una API, escribir en `console.log` o interactuar con el DOM.

Esta pureza hace que las funciones sean predecibles, fáciles de probar y seguras de usar en cualquier parte de la aplicación sin causar comportamientos inesperados.

## ¿Qué tipo de funciones van aquí?

- **Formateadores:** Funciones para dar formato a fechas, números, monedas, etc.
- **Validadores:** Funciones de validación personalizadas para formularios reactivos de Angular.
- **Cálculos:** Funciones que realizan cálculos específicos.
- **Manipulación de datos:** Funciones para transformar arrays, objetos, o strings de una manera genérica.

## Ejemplo

`date.utils.ts`
```typescript
export function formatDate(date: Date, format: 'YYYY-MM-DD' | 'DD/MM/YYYY'): string {
  // ...lógica para formatear la fecha
  // No modifica el objeto 'date' original
  // No depende de nada más que sus argumentos
  return 'fecha-formateada';
}
```

`form.validators.ts`
```typescript
import { AbstractControl, ValidationErrors } from '@angular/forms';

export function containsUpperCase(control: AbstractControl): ValidationErrors | null {
  const hasUpperCase = /[A-Z]/.test(control.value);
  if (!hasUpperCase) {
    return { noUpperCase: true }; // Devuelve un error si no hay mayúscula
  }
  return null; // Válido
}
```
