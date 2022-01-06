import { lazy } from 'react'

const Discover = lazy(() => import('./pages/discover'))
const NotFound = lazy(() => import('./pages/notfound'))
const fallbackRoute = {
  path: '*',
  title: 'Error',
  component: NotFound
}

export const routes = [
  { path: '/discover', title: 'Discover', component: Discover },
  fallbackRoute,
]

export const getTitleByPath = (path) => {
  const { title } = routes.find(route => route.path === path) || fallbackRoute

  return title
}
