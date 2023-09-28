// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: "/alura-geek-vanillajs/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        add: resolve(__dirname, 'views/add-product.html'),
        login: resolve(__dirname, 'views/login.html'),
        description: resolve(__dirname, 'views/product-description.html'),
        category: resolve(__dirname, 'views/products-category.html'),
        products: resolve(__dirname, 'views/products.html'),
      },
    }
  }
})