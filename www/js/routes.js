angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.inventario', {
    url: '/inventory',
    views: {
      'tab1': {
        templateUrl: 'templates/catInventory.html',
        controller: 'inventarioCtrl'
      }
    }
  })

  .state('tabsController.balances', {
    url: '/balances',
    views: {
      'tab3': {
        templateUrl: 'templates/balances.html',
        controller: 'balancesCtrl'
      }
    }
  })

  .state('tabsController.economia', {
    url: '/economy',
    views: {
      'tab2': {
        templateUrl: 'templates/economy.html',
        controller: 'economiaCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/AEA',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.aAdirAlInventario', {
    url: '/addtoinv',
    views: {
      'tab1': {
        templateUrl: 'templates/aAdirAlInventario.html',
        controller: 'aAdirAlInventarioCtrl'
      }
    }
  })

  .state('tabsController.particularInv', {
    url: '/inventory:catId',
    views: {
      'tab1': {
        templateUrl: 'templates/inventario.html',
        controller: 'particularCtrl'
      }
    }
  })
  .state('tabsController.item', {
    url: '/item:itemId',
    views: {
      'tab1': {
        templateUrl: 'templates/item.html',
        controller: 'itemCtrl'
      }
    }
  })
  .state('tabsController.modItem', {
    url: '/item/mod:modItem',
    views: {
      'tab1': {
        templateUrl: 'templates/aAdirAlInventario.html',
        controller: 'itemModCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/AEA/inventory')



});
