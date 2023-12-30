import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from "@rollup/plugin-typescript";
import { resolve } from 'path'
import { typescriptPaths } from "rollup-plugin-typescript-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3006
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'LoadingDirective',
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "dist",
        }),
      ],
    }
  }
})

