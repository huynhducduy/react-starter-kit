import { inverseRoutes } from '..';

export default function getRoute(path) {
  return inverseRoutes.get(path);
}
