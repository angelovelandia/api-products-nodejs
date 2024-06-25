module.exports =  {
  files: ['**/*.js', '**/*.jsx'],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    globals: {
      browser: true,
      node: true
    }
  },
  rules: {
    'no-console': 'off', //Permite el uso de console.log (puedes cambiarlo a 'warn' o 'error' según tus necesidades).
    'semi': ['error', 'always'], //Requiere el uso de punto y coma al final de las declaraciones.
    'quotes': ['error', 'single'], //Requiere el uso de comillas simples.
    'indent': ['error', 2], //Requiere una indentación de 2 espacios.
    'no-unused-vars': ['warn'], //Advierte sobre variables no utilizadas.
    'comma-dangle': ['error', 'only-multiline'], //Requiere una coma final en listas de objetos y arrays multilinea.
    'space-before-function-paren': ['error', 'never'], //Requiere que no haya espacio antes de los paréntesis de las funciones.
  }
};
