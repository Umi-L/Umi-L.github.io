import { createApp } from 'vue'
import App from './App.vue'

import '@animxyz/core' // Import css here if you haven't elsewhere

import VueAnimXyz from '@animxyz/vue3'

const app = createApp(App);

app.use(VueAnimXyz)

app.mount('#app')
