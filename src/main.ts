import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/sass/style.scss'
import App from './App.vue'
import './registerServiceWorker'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const app = createApp(App)
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(createPinia())

app.mount('#app')
