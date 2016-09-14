// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})
.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $rootScope.categorias = JSON.parse(window.localStorage.getItem("categorias"));
    if($rootScope.categorias == undefined){
      $rootScope.categorias = []
      $rootScope.categorias.push({'id': 0,'nombre':'Mejoras','valor':5});
      $rootScope.categorias.push({'id': 1,'nombre':'Tractores, Maquinarias y Rodados','valor':10});
      $rootScope.categorias.push({'id': 2,'nombre':'Pasturas Perennes','valor':1});
      $rootScope.categorias.push({'id': 3,'nombre':'Reproductores y Animales de Trabajo','valor':10});
      $rootScope.categorias.push({'id': 4,'nombre':'Deposito','valor':0});
      $rootScope.categorias.push({'id': 5,'nombre':'Granos Almacenados','valor':0});
      $rootScope.categorias.push({'id': 6,'nombre':'Ganado Circulante','valor':0});
      $rootScope.categorias.push({'id': 7,'nombre':'Ganado de Renta','valor':0});
      $rootScope.categorias.push({'id': 8,'nombre':'Pasturas Anuales','valor':-1});
      $rootScope.categorias.push({'id': 9,'nombre':'Cultivos Anuales','valor':-1});
      window.localStorage.setItem("categorias", JSON.stringify($rootScope.categorias));
    }
  });
})
