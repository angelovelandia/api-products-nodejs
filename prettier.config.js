module.exports = {
  tabWidth: 2, // Tamaño de la tabulación
  bracketSpacing: true, // Añadir espacios alrededor de las llaves en los objetos literales
  arrowParens: 'avoid', // Omitir paréntesis alrededor de un solo parámetro de función de flecha
  // Formatear automáticamente al guardar utilizando prettier-eslint
  // Requiere tener instalado prettier y eslint en tu proyecto
  eslintIntegration: true,
  // Ubicación del archivo de configuración de ESLint
  eslintConfig: './.eslint.config.js',
  // Ejecutar prettier primero y luego eslint para garantizar un formateo correcto
  eslintAlwaysPrettier: true
};
