import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _353e7403 = () => interopDefault(import('..\\pages\\battles_index.vue' /* webpackChunkName: "pages/battles_index" */))
const _28043b98 = () => interopDefault(import('..\\pages\\characters_index.vue' /* webpackChunkName: "pages/characters_index" */))
const _06dedb37 = () => interopDefault(import('..\\pages\\cities_index.vue' /* webpackChunkName: "pages/cities_index" */))
const _0ac5dd22 = () => interopDefault(import('..\\pages\\directors_index.vue' /* webpackChunkName: "pages/directors_index" */))
const _864e8e7e = () => interopDefault(import('..\\pages\\houses_index.vue' /* webpackChunkName: "pages/houses_index" */))
const _951cd29e = () => interopDefault(import('..\\pages\\movies_index.vue' /* webpackChunkName: "pages/movies_index" */))
const _5e128eaa = () => interopDefault(import('..\\pages\\religions_index.vue' /* webpackChunkName: "pages/religions_index" */))
const _0bbfdc25 = () => interopDefault(import('..\\pages\\studios_index.vue' /* webpackChunkName: "pages/studios_index" */))
const _45070d87 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2285f18a = () => interopDefault(import('..\\pages\\battles\\_slug.vue' /* webpackChunkName: "pages/battles/_slug" */))
const _ef0dc6d6 = () => interopDefault(import('..\\pages\\characters\\_slug.vue' /* webpackChunkName: "pages/characters/_slug" */))
const _f61b1e54 = () => interopDefault(import('..\\pages\\cities\\_slug.vue' /* webpackChunkName: "pages/cities/_slug" */))
const _08fb019e = () => interopDefault(import('..\\pages\\directors\\_slug.vue' /* webpackChunkName: "pages/directors/_slug" */))
const _e39776e8 = () => interopDefault(import('..\\pages\\houses\\_slug.vue' /* webpackChunkName: "pages/houses/_slug" */))
const _ae91b6c8 = () => interopDefault(import('..\\pages\\movies\\_slug.vue' /* webpackChunkName: "pages/movies/_slug" */))
const _14352bc3 = () => interopDefault(import('..\\pages\\religions\\_slug.vue' /* webpackChunkName: "pages/religions/_slug" */))
const _1c318da8 = () => interopDefault(import('..\\pages\\studios\\_slug.vue' /* webpackChunkName: "pages/studios/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/battles_index",
    component: _353e7403,
    name: "battles_index"
  }, {
    path: "/characters_index",
    component: _28043b98,
    name: "characters_index"
  }, {
    path: "/cities_index",
    component: _06dedb37,
    name: "cities_index"
  }, {
    path: "/directors_index",
    component: _0ac5dd22,
    name: "directors_index"
  }, {
    path: "/houses_index",
    component: _864e8e7e,
    name: "houses_index"
  }, {
    path: "/movies_index",
    component: _951cd29e,
    name: "movies_index"
  }, {
    path: "/religions_index",
    component: _5e128eaa,
    name: "religions_index"
  }, {
    path: "/studios_index",
    component: _0bbfdc25,
    name: "studios_index"
  }, {
    path: "/",
    component: _45070d87,
    name: "index"
  }, {
    path: "/battles/:slug?",
    component: _2285f18a,
    name: "battles-slug"
  }, {
    path: "/characters/:slug?",
    component: _ef0dc6d6,
    name: "characters-slug"
  }, {
    path: "/cities/:slug?",
    component: _f61b1e54,
    name: "cities-slug"
  }, {
    path: "/directors/:slug?",
    component: _08fb019e,
    name: "directors-slug"
  }, {
    path: "/houses/:slug?",
    component: _e39776e8,
    name: "houses-slug"
  }, {
    path: "/movies/:slug?",
    component: _ae91b6c8,
    name: "movies-slug"
  }, {
    path: "/religions/:slug?",
    component: _14352bc3,
    name: "religions-slug"
  }, {
    path: "/studios/:slug?",
    component: _1c318da8,
    name: "studios-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
