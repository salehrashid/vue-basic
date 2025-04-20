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
    component: Home,
    meta: {
      title: "Home | Vue Basic"
    }
  },
  {
    path: '/composition-component',
    component: CompositionComponent,
    meta: {
      title: "Composition Component"
    }
  },
  {
    path: '/option-component',
    component: OptionsComponent,
    meta: {
      title: "Option Component"
    }
  },
  {
    path: '/text-interpolation',
    component: TextInterpolation,
    meta: {
      title: "Text Interpolation"
    }
  },

  // Harus taruh paling bawah biar gak override route yang valid.
  {
    path: '/:pathMatch(.*)*', //itu wildcard alias tangkap semua route yang nggak match.
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: "404 Not Found"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
