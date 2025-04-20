import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import CompositionComponent from '../components/CompositionComponent.vue';
import OptionsComponent from '../components/OptionsComponent.vue';
import TextInterpolation from '../components/TextInterpolation.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/composition-component', component: CompositionComponent },
  { path: '/option-component', component: OptionsComponent },
  { path: '/text-interpolation', component: TextInterpolation },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
