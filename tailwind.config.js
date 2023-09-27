/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./views/login.html",
    "./views/products.html",
    "./views/add-product.html",
    "./views/products-category.html",
    "./views/product-description.html",
    "./controllers/ProductController.js",
    "./controllers/ProductCategoryController.js",
    "./controllers/AddProductController.js",
    "./controllers/CategoryController.js",
    "./controllers/ProductDescriptionController.js",
    "./components/alert.js",
    "./components/LoginBtn.js",
    "./components/LogoutBtn.js",
    "./helpers/SearchBar.js"
  ],
  theme: {
    extend: {},
    minHeight: {
      'svh': 'calc(100svh - 113px)'
    }
  },
  plugins: [],
}

