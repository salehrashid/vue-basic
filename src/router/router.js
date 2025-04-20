import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../components/Home.vue';
import CompositionComponent from '../components/CompositionComponent.vue';
import OptionsComponent from '../components/OptionsComponent.vue';
import TextInterpolation from '../components/TextInterpolation.vue';
import NotFound from '../components/NotFound.vue';

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/composition-component',
    component: CompositionComponent
  },
  {
    path: '/option-component',
    component: OptionsComponent
  },
  {
    path: '/text-interpolation',
    component: TextInterpolation
  },

  // Harus taruh paling bawah biar gak override route yang valid.
  {
    path: '/:pathMatch(.*)*', //itu wildcard alias tangkap semua route yang nggak match.
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
