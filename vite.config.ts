import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// @ts-expect-error: vite-plugin-eslint lacks TypeScript declarations
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteEslint(),
    viteStylelint({
      exclude: ['node_modules/**', 'dist/**']
    })
  ]
})
