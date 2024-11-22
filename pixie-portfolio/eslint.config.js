import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignore the `dist` folder
  },
  {
    files: ['**/*.{js,jsx}'], // Apply these rules to all JS and JSX files
    languageOptions: {
      ecmaVersion: 2020, // Use ECMAScript 2020 syntax
      globals: globals.browser, // Include browser global variables
      parserOptions: {
        ecmaVersion: 'latest', // Enable the latest ECMAScript features
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Use ES modules
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    plugins: {
      react, // React-specific linting rules
      'react-hooks': reactHooks, // Rules for React hooks
      'react-refresh': reactRefresh, // Rules for React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Include recommended JS rules
      ...react.configs.recommended.rules, // Include recommended React rules
      ...react.configs['jsx-runtime'].rules, // Rules for the JSX runtime
      ...reactHooks.configs.recommended.rules, // Include recommended hooks rules

      // Custom rule configurations
      'react/jsx-no-target-blank': 'off', // Allow `target="_blank"` without `rel="noopener"`
      'react-refresh/only-export-components': [
        'warn', // Warn when exporting non-components
        { allowConstantExport: true },
      ],
      'react/no-unknown-property': [
        'error', // Ignore unknown properties specific to Three.js
        {
          ignore: [
            'position',
            'args',
            'color',
            'rotation',
            'scale',
            'castShadow',
            'receiveShadow',
            'angle', // Add specific Three.js properties
            'penumbra',
          ],
        },
      ],
    },
  },
];
