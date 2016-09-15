angular.module('app.controllers', [])

.controller('inventarioCtrl', ['$scope', '$stateParams', '$state', '$rootScope', function ($scope, $stateParams, $state, $rootScope) {
    $rootScope.categorias = [
      {'id': 0,'nombre':'Mejoras','valor':5},
      {'id': 1,'nombre':'Tractores, Maquinarias y Rodados','valor':10},
      {'id': 2,'nombre':'Pasturas Perennes','valor':1},
      {'id': 3,'nombre':'Reproductores y Animales de Trabajo','valor':10},
      {'id': 4,'nombre':'Deposito','valor':0},
      {'id': 5,'nombre':'Granos Almacenados','valor':0},
      {'id': 6,'nombre':'Ganado Circulante','valor':0},
      {'id': 7,'nombre':'Ganado de Renta','valor':0},
      {'id': 8,'nombre':'Pasturas Anuales','valor':-1},
      {'id': 9,'nombre':'Cultivos Anuales','valor':-1}
    ];
    $scope.goToInv = function(catId){
        $state.go('tabsController.particularInv', {catId: catId})
    }
}])

.controller('balancesCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {


}])

.controller('particularCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
  $scope.$on('$ionicView.beforeEnter', function () {
    helper = JSON.parse(window.localStorage.getItem("inv-item"));
    $scope.invElements = helper.filter(function (item) {return item.cat.id === parseInt($stateParams.catId);});
  });
  $scope.goTo = function(itemId){
      $state.go('tabsController.item', {itemId: itemId})
  }

}])

.controller('aAdirAlInventarioCtrl', ['$scope', '$stateParams', '$rootScope', function ($scope, $stateParams, $rootScope) {
  $scope.action='Añadir';
  $scope.inv = {
    'id' : 0,
    'item' : '',
    'state' : '',
    'cant' : '',
    'valnew' : '',
    'life' : '',
    'bought' : '',
    'cat': {'id': 0,'nombre':'Mejoras','valor':5}
  }
  $scope.sendToStorage = function() {
    var items;
    var aux = window.localStorage.getItem("inv-item");
    if( aux !== undefined){
      items = JSON.parse(aux);
    }
    try{
        $scope.inv.id = items[items.length-1].id+1;
        items.push($scope.inv);
    }catch(TypeError){
        items = [];
        $scope.inv.id = 0;
        items.push($scope.inv);
    }
    window.localStorage.setItem("inv-item", JSON.stringify(items));
    $scope.inv = {
      'id' : 0,
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

.controller('itemCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', function ($scope, $stateParams, $state, $ionicHistory) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.aux = JSON.parse(window.localStorage.getItem("inv-item"))
    $scope.item = $scope.aux.filter(function (items) {return items.id == $stateParams.itemId;})[0];
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
    var aux = $scope.aux.filter(function (item) {return item.id !== parseInt($stateParams.itemId);});
    window.localStorage.setItem("inv-item", JSON.stringify(aux));
    $state.go('tabsController.inventario');
    $ionicHistory.goBack();
  }
}])
.controller('itemModCtrl', ['$scope', '$stateParams', '$state', '$rootScope', function ($scope, $stateParams, $state, $rootScope) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.aux = JSON.parse(window.localStorage.getItem("inv-item"));
    $scope.inv = $scope.aux.filter(function (item) {return item.id == parseInt($stateParams.modItem);})[0];
    $scope.inv.bought = new Date($scope.inv.bought);
    $scope.action="Modificar";
  });

  $scope.sendToStorage = function() {
    $scope.aux.filter(function (item) {return item.id == parseInt($stateParams.modItem);})[0] = $scope.inv;
    window.localStorage.setItem("inv-item", JSON.stringify($scope.aux));
    $state.go('tabsController.item', {itemId: $stateParams.modItem})
  }
}])
