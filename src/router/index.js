import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home.vue'
import navbar from '../components/navbar.vue'
import navbarc from '../components/navbar-clone.vue'
import pages from '../components/pages.vue'
import about from '../components/about.vue'
import contact from '../components/contact.vue'
import gsap from '../components/gsap.vue'
import members from '../components/members.vue'
import spin from '../components/spinner.vue'



Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
// const ItemView = () => import('../views/ItemView.vue')
// const UserView = () => import('../views/UserView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/members',
        name: 'members',
        component: members
      },
      {
        path: '/spin',
        name: 'spin',
        component: spin
      },
      {
        path: '/gsap',
        name: 'gsap',
        component: gsap
      },
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/contact',
        name: 'contact',
        component: contact
      },
      {
        path: '/navbarc',
        name: 'navbarc',
        component: navbarc
      },
      {
        path: '/pages',
        name: 'pages',
        component: pages
      },
      {
        path: '/navbar',
        name: 'navbar',
        component: navbar
      },
      {
        path: '/about',
        component: about,
        name: 'about'
      },
      // {
      //   path: '/posts/:id/edit',
      //   component: editpost,
      //   name: 'editpost'
      // }

      // { path: '/top/:page(\\d+)?', component: createListView('top') },
      // { path: '/new/:page(\\d+)?', component: createListView('new') },
      // { path: '/show/:page(\\d+)?', component: createListView('show') },
      // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      // { path: '/job/:page(\\d+)?', component: createListView('job') },
      // { path: '/item/:id(\\d+)', component: ItemView },
      // { path: '/user/:id', component: UserView },
      // { path: '/', redirect: '/top' }
    ]
  })
}
