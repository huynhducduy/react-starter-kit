import { routes } from '..'

export default function getPaths(name: string): string[] | undefined {
  const paths = routes.get(name) // eslint-disable-line
  if (paths === undefined) return
  if (Array.isArray(paths)) return paths // eslint-disable-line
  return [String(paths)]
}
