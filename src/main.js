// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import 'quasar/src/css/index.sass'; // Import Quasar styles

const app = createApp(App);
app.use(Quasar, {
  plugins: {}, // Add any Quasar plugins here if needed
});
app.mount('#app');
