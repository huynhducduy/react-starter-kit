import pathToRegexp from 'path-to-regexp';
import getRoute from './getRoute';

export default function (name, data = {}) {
  const route = getRoute(name);
  if (route !== undefined) return pathToRegexp.compile(route.path)(data);
}
