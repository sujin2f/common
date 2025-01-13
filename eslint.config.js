const react = require('eslint-plugin-react')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const hooksPlugin = require('eslint-plugin-react-hooks')

module.export = tseslint.config({
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
        react.configs.flat.recommended,
        jsxA11y.flatConfigs.recommended,
    ],
    plugins: {
        'react-hooks': hooksPlugin,
    },
    rules: {
        ...hooksPlugin.configs.recommended.rules,
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        '@typescript-eslint/no-duplicate-enum-values': 'off',
    },
})
