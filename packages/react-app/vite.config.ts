import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from 'vite-tsconfig-paths'
import { mergeConfig, defineConfig as vitestDefineConfig } from 'vitest/config'
import config from './config'

const viteConfig = defineConfig({
  server: {
    port: config.get('port'),
  },
  build: {
    chunkSizeWarningLimit: 550,
  },
  plugins: [
    svgr(), // https://www.npmjs.com/package/vite-plugin-svgr
    tsConfigPaths(),
    tanstackStart(),
    viteReact(), // react's vite plugin must come after start's vite plugin
    tailwindcss(),
  ],
})

const vitestConfig = vitestDefineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
    },
  },
})

export default mergeConfig(viteConfig, vitestConfig)
