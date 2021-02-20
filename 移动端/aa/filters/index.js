import Vue from 'vue';


import date from './date.js';
import fillzero from './fillzero.js';

Vue.filter('date',date)
Vue.filter('fillzero',fillzero)