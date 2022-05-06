import { createApp } from 'vue';
import Dev from './serve.vue';
import "materialize-css/dist/css/materialize.css";

import "material-design-icons/iconfont/material-icons.css";

const app = createApp(Dev);
app.mount('#app');
