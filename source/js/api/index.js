import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

promisePolyfill.polyfill();

function testAsync() {
  return fetch('http://date.jsontest.com/')
    .then(response => response.json());
}

export default {
  testAsync,
};
