/* eslint-disable */
window._ = require('lodash');

try {
  window.popper = require('popper.js');
  window.$ = window.jquery = require('jquery');

  require('bootstrap');
} catch (e) { }

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
