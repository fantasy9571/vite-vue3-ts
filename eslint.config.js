import pluginJs from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      globals: globals.browser
    },
    ignores: ['node_modules', 'dist', 'pnpm-lock.yaml', 'public'],
    files: ['**/*.ts', '**/*.vue', '**/*.js'],
    plugins: {
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
      import: pluginImport
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'error',
      'import/no-duplicates': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          endOfLine: 'auto',
          printWidth: 80
        }
      ],
      'vue/multi-word-component-names': 0,
      'vue/no-v-model-argument': 'off',
      'vue/no-v-for-template-key-on-child': 'off',
      'vue/no-v-for-template-key': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'vue/no-parsing-error': 'off'
    }
  }
]
