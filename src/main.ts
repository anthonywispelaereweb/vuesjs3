import { createApp } from 'vue'
import App from './App.vue'
import Answer from './components/Answer.vue'
import PriceProduct from './components/PriceProduct.vue'



import './assets/main.css'

createApp(App)
	.component('Answer', Answer)
	.component('PriceProduct', PriceProduct)
	.mount('#app')
