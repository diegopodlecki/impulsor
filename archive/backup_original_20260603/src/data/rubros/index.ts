export { gimnasioConfig } from './gimnasio';
export { entrenadorConfig } from './entrenador';
export { psicologoConfig } from './psicologo';
export { nutricionistaConfig } from './nutricionista';
export { esteticaConfig } from './estetica';

export const RUBROS_CONFIG = {
  gimnasio: require('./gimnasio').gimnasioConfig,
  'personal-trainer': require('./entrenador').entrenadorConfig,
  psicologo: require('./psicologo').psicologoConfig,
  nutritionist: require('./nutricionista').nutricionistaConfig,
  'estetica-corporal': require('./estetica').esteticaConfig,
};