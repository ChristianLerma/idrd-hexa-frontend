import { Provider } from '@angular/core';
import { MaterialRepository } from '../../core/domain/repositories/material.repository';
import { MaterialRepositoryImpl } from '../adapters/secondary/persistence/material.repository.impl';
import { MaterialHttpRepositoryImpl } from '../adapters/secondary/persistence/material-http.repository.impl';

/**
 * Configuración de inyección de dependencias para repositorios
 */

// Configuración para desarrollo (usando implementación en memoria)
export const DEVELOPMENT_PROVIDERS: Provider[] = [
  {
    provide: MaterialRepository,
    useClass: MaterialRepositoryImpl
  }
];

// Configuración para producción (usando HTTP client)
export const PRODUCTION_PROVIDERS: Provider[] = [
  {
    provide: MaterialRepository,
    useClass: MaterialHttpRepositoryImpl
  }
];

// Provider dinámico basado en el entorno
export const MATERIAL_REPOSITORY_PROVIDER: Provider = {
  provide: MaterialRepository,
  useClass: MaterialRepositoryImpl, // Cambiar por MaterialHttpRepositoryImpl en producción
};

// Factory provider más avanzado (opcional)
export function createMaterialRepositoryProvider(useHttp: boolean = false): Provider {
  return {
    provide: MaterialRepository,
    useClass: useHttp ? MaterialHttpRepositoryImpl : MaterialRepositoryImpl
  };
}

export const INFRASTRUCTURE_PROVIDERS: Provider[] = [
  MATERIAL_REPOSITORY_PROVIDER,
];

