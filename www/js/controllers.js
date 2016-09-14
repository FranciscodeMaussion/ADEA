angular.module('app.controllers', [])

.controller('inventarioCtrl', ['$scope', '$stateParams', '$state', '$rootScope', function ($scope, $stateParams, $state, $rootScope) {
    $scope.$on('$ionicView.beforeEnter', function () {
      helper = JSON.parse(window.localStorage.getItem("inv-item"));
      $scope.invElements = helper.filter(function (item) {return item.cat.id === 1;});
      $scope.categorias = $rootScope.categorias;
    });
    $scope.goTo = function(itemId){
        $state.go('tabsController.item', {itemId: itemId})
    }
}])

.controller('balancesCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {


}])


.controller('aAdirAlInventarioCtrl', ['$scope', '$stateParams', '$rootScope', function ($scope, $stateParams, $rootScope) {
  $scope.action='Añadir';
  $scope.inv = {
    'item' : '',
    'state' : '',
    'cant' : '',
    'valnew' : '',
    'life' : '',
    'bought' : '',
    'cat': {'id': 0,'nombre':'Mejoras','valor':5}
  }
  $scope.categorias = $rootScope.categorias;
  $scope.sendToStorage = function() {
    var items;
    var aux = window.localStorage.getItem("inv-item");
    if( aux !== undefined){
      items = JSON.parse(aux);
    }
    try{
        items.push($scope.inv);
    }catch(TypeError){
        items = [];
        items.push($scope.inv);
    }
    window.localStorage.setItem("inv-item", JSON.stringify(items));
    $scope.inv = {
      'item' : '',
      'state' : '',
      'cant' : '',
      'valnew' : '',
      'life' : '',
      'bought' : '',
      'cat': {'id': 0,'nombre':'Mejoras','valor':5}
    }
  }
}])

.controller('itemCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.aux = JSON.parse(window.localStorage.getItem("inv-item"))
    $scope.item = $scope.aux[$stateParams.itemId];
    $scope.item.bought = new Date($scope.item.bought);
    var a = $scope.item;
    var hoy = new Date().getFullYear();
    var year = a.bought.getFullYear();
    var dfp = a.life - ( hoy - year );
    var vr = (a.cat.valor*a.valnew)/100
    if (dfp < 0){
      dfp = 0;
    }
    var vraci;
    var cad;
    if (dfp !== 0){
      vraci = ((a.valnew - vr)*dfp/a.life +vr)* a.cant;
      cad = (vraci-vr)/dfp
    }else{
      vraci = vr;
      cad = 0;
    }
    $scope.calculados = {
      'dfp': dfp,
      'vr': vr,
      'vraci': vraci,
      'cad': cad,
    };
  });
  $scope.modify = function(){
    $state.go('tabsController.modItem', {modItem: $stateParams.itemId})
  }
  $scope.delete = function(){
    var aux = $scope.aux;
    aux.splice($stateParams.itemId,1);
    window.localStorage.setItem("inv-item", JSON.stringify(aux));
    $state.go('tabsController.inventario')
  }
}])
.controller('itemModCtrl', ['$scope', '$stateParams', '$state', '$rootScope', function ($scope, $stateParams, $state, $rootScope) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.aux = JSON.parse(window.localStorage.getItem("inv-item"));
    $scope.inv = $scope.aux[$stateParams.modItem];
    $scope.inv.bought = new Date($scope.inv.bought);
    $scope.action="Modificar";
    $scope.categorias = $rootScope.categorias;
  });

  $scope.sendToStorage = function() {
    $scope.aux[$stateParams.modItem] = $scope.inv;
    window.localStorage.setItem("inv-item", JSON.stringify($scope.aux));
    $state.go('tabsController.item', {itemId: $stateParams.modItem})
  }
}])
