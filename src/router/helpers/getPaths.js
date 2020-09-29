import { routes } from '..';

export default function getPaths(name) {
  const paths = routes.get(name);
  if (paths === undefined) return;
  if (Array.isArray(paths)) return paths;
  return [String(paths)];
}
