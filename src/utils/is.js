import { isValidElement } from 'react';

function isClassComponent(component) {
  return (
    typeof component === 'function' && !!component.prototype.isReactComponent
  );
}

function isFunctionComponent(component) {
  return (
    typeof component === 'function' &&
    String(component).includes('return React.createElement')
  );
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component);
}

function isElement(element) {
  return isValidElement(element);
}

function isReactElement(element) {
  return isElement(element) || isReactComponent(element);
}

function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

const is = {
  classComponent: isClassComponent,
  functionComponent: isFunctionComponent,
  reactComponent: isReactComponent,
  element: isElement,
  reactElement: isReactElement,
  domTypeElement: isDOMTypeElement,
};

export default is;

export {
  isClassComponent,
  isFunctionComponent,
  isReactComponent,
  isElement,
  isReactElement,
  isDOMTypeElement,
};
