import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'off', //Avisa quando houver uma variavel que nao foi utilizada
      'no-console': 'off', //Avisa quando houver console.logs deixados no codigo perdidos
      semi: ['off', 'always'], //Avisa quando nao ha um ponto e virgula no final de uma linha
      quotes: ['off', 'single'], //Avisa quando nao houver aspas simple; Ou seja, '
      'no-undef': 'off', //Da erro quando ha uma variavel nao definida
      'no-var': 'off', //Avisa quando esta a ser usado var em vez de let ou const
    },
  },
];
