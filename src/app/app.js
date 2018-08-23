import angular from 'angular';

// external modules
import 'lodash';
import 'angular-simple-logger';
import uiRouter from 'angular-ui-router';
import 'angular-google-maps';
import googlePlaces from 'angular-google-places-autocomplete';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import restangular from 'restangular';
import hotkeys from 'angular-hotkeys';
import angularTranslate from 'angular-translate';
import 'angular-translate-loader-static-files';
import 'angular-socket-io';

// config
import config from './app.config';
import routes from './app.routes';

// Factories & Services
import SegueService from './wizard/services/services';
import geolocation from './wizard/services/geolocation.factory';
import AnimationService from './wizard/services/animation.factory';
import { platformNotify, platform } from './wizard/services/platform';

export const App = angular.module('app', [
  ngMaterial,
  ngMessages,
  ngAnimate,
  uiRouter,
  restangular,
  'uiGmapgoogle-maps',
  googlePlaces,
  'btford.socket-io',
  angularTranslate,
  // 'angularLazyImg', TODO check this one: https://github.com/afklm/ng-lazy-image
  'cfp.hotkeys'
])
.config(config)
.config(routes)
.service('SegueService', SegueService)
.factory('AnimationService', AnimationService)
.factory('platformNotify', platformNotify)
.factory('platform', platform)
.factory('$geolocation', geolocation);
