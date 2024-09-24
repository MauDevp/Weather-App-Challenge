import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Importa el módulo `path`


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils/'), // Alias para la carpeta de utilidades
      '@assets': path.resolve(__dirname, 'src/assets/'), // Alias para la carpeta de activos
      '@styles': path.resolve(__dirname, 'src/styles/'), // Alias para la carpeta de estilos
      '@components': path.resolve(__dirname, 'src/components/'), // Alias para la carpeta de componentes
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Añade las extensiones de archivo que se resolverán
  },
})
