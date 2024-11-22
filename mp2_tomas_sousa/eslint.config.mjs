import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    parser: "espree", // Parser padrão para JavaScript
    extends: [
      "eslint:recommended", // Regras recomendadas pelo ESLint
      "prettier", // Regras para o Prettier
    ],
    plugins: ["prettier"], // Plugins para utilizar
    rules: {
      // Regras
      "no-unused-vars": "warn", // Avisa quando houver uma variável que não foi utilizada
      "no-console": "off", // Avisa quando houver console.logs deixados no código perdidos
      semi: ["error", "always"], // Avisa quando não há um ponto e vírgula no final de uma linha
      quotes: ["error", "single"], // Avisa quando não houver aspas simples; Ou seja, '
      "no-undef": "error", // Dá erro quando há uma variável não definida
      "no-var": "warn", // Avisa quando está a ser usado var em vez de let ou const
      "prettier/prettier": ["error", { endOfLine: "auto" }], // Avisa quando há um erro de formatação
    },
  },
];
