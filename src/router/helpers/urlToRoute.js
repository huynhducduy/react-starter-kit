import pathToRegexp from 'path-to-regexp';
import routes from '../../routes';

export default function (url) {
  for (const route of routes) {
    if (pathToRegexp(route.path).test(url)) return route;
  }
}
