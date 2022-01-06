import { routes, getTitleByPath } from './routes'
import { lazy } from 'react'

describe('Application routes', () => {
  describe('routes', () => {
    it('routes to be an array', () => expect(routes).toBeInstanceOf(Array))
  
    it('all routes to have the required structure', () => {
      const routeStructure = {
        path: expect.any(String),
        title: expect.any(String),
        component: expect.any(Object),
      }
  
      routes.forEach(route => expect(route).toMatchObject(routeStructure))
    })

    it('all routes to be a lazy component', () => {
      const { $$typeof } = lazy(() => { })
  
      routes.forEach(({ component }) => expect(component).toMatchObject({ $$typeof }))
    })
  
    it('routes to contains a fallback route', () => {
      expect(routes)
        .toEqual(expect.arrayContaining([
          expect.objectContaining({ path: '*' })
        ]))
    })
  })

  describe('getTitleByPath', () => {
    it('returns fallback route title if path does not exists', () => {
      const fallbackRoute = routes.find(({ path }) => path === '*')
      const title = getTitleByPath('/non-existing-path')
  
      expect(title).toBe(fallbackRoute.title)
    })
  
    it('returns route title from existing path', () => {
      const route = routes.find(({ path }) => path !== '*')
      const title = getTitleByPath(route.path)
  
      expect(title).toBe(route.title)
    })
  })
})
