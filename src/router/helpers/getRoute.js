import { routes } from '../'

const inverseRoutes = new Map()

routes.forEach((value, key) => {
  if (Array.isArray(value)) for (const i of value) inverseRoutes.set(i, key)
  else inverseRoutes.set(value, key)
})

export default function getRoute(path) {
  return inverseRoutes.get(path)
}
