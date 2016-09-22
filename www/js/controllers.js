angular.module('app.controllers', [])

.controller('inventarioCtrl', ['$scope', '$stateParams', '$state', '$rootScope', function ($scope, $stateParams, $state, $rootScope) {
    $rootScope.categorias = [
      {'id': 0,'nombre':'Tierras','valor':-1, 'do':'0','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Nombre'}},{key:'cantidad',type: 'inline-input',templateOptions:{type: 'number',label: 'Cantidad de Hectáreas'}},{key:'precio',type: 'inline-input',templateOptions:{type: 'number',label: 'Precio por Hectárea'}}]},// Tierras
      {'id': 1,'nombre':'Mejoras','valor':5, 'do':'1','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'estado',type: 'inline-input',templateOptions: {type: 'text',label: 'Estado'}},{key:'cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad'}},{key:'nuevo',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Nuevo'}},{key:'comprado',type: 'inline-input',templateOptions: {type: 'month',label: 'Año de Compra'}},{key:'vida',type: 'inline-input',templateOptions: {type: 'number',label: 'Vida Util'}},]},// con vraci
      {'id': 2,'nombre':'Tractores, Maquinarias y Rodados','valor':10, 'do':'1','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'estado',type: 'inline-input',templateOptions: {type: 'text',label: 'Estado'}},{key:'cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad'}},{key:'nuevo',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Nuevo'}},{key:'comprado',type: 'inline-input',templateOptions: {type: 'month',label: 'Año de Compra'}},{key:'vida',type: 'inline-input',templateOptions: {type: 'number',label: 'Vida Util'}},]}, // con vraci
      {'id': 3,'nombre':'Pasturas Perennes','valor':1, 'do':'2','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Tipo de Pastura'}},{key:'precio',type: 'inline-input',templateOptions: {type: 'number',label: 'Costo por Hectárea'}},{key:'cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Superficie'}},{key:'implantado',type: 'inline-input',templateOptions: {type: 'month',label: 'Año de implantacion'}},{key:'vida',type: 'inline-input',templateOptions: {type: 'number',label: 'Vida Útil'}}]},// con vraci
      {'id': 4,'nombre':'Reproductores y Animales de Trabajo','valor':10, 'do':'3','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad'}},{key:'precio',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},{key:'comprado',type: 'inline-input',templateOptions: {type: 'month',label: 'Año de Compra'}},{key:'vida',type: 'inline-input',templateOptions: {type: 'number',label: 'Vida Util'}}]}, // con vraci
      {'id': 5,'nombre':'Deposito','valor':0, 'do':'4','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'c-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Inicio'}},{key:'c-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},{key:'f-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Finalizar'}},{key:'f-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},]}, // sin vraci
      {'id': 6,'nombre':'Granos Almacenados','valor':0, 'do':'4','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'c-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Inicio'}},{key:'c-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},{key:'f-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Finalizar'}},{key:'f-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},]},// sin vraci
      {'id': 7,'nombre':'Ganado Circulante','valor':0, 'do':'4','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'c-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Inicio'}},{key:'c-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},{key:'f-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Finalizar'}},{key:'f-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},]},// sin vraci
      {'id': 8,'nombre':'Ganado de Renta','valor':0, 'do':'4','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Item'}},{key:'c-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Inicio'}},{key:'c-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},{key:'f-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Cantidad al Finalizar'}},{key:'f-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Valor Unitario'}},]},// sin vraci
      {'id': 9,'nombre':'Pasturas Anuales','valor':-1, 'do':'4','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Cultivo'}},{key:'lote',type: 'inline-input',templateOptions: {type: 'text',label: 'Lote'}},{key:'c-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Superficie al Inicio'}},{key:'c-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Costo por Hectárea'}},{key:'f-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Superficie al Finalizar'}},{key:'f-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Costo por Hectárea'}},]},// sin vraci
      {'id': 10,'nombre':'Cultivos Anuales','valor':-1, 'do':'4','fields':[{key:'item',type: 'inline-input',templateOptions:{type: 'text',label: 'Cultivo'}},{key:'lote',type: 'inline-input',templateOptions: {type: 'text',label: 'Lote'}},{key:'c-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Superficie al Inicio'}},{key:'c-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Costo por Hectárea'}},{key:'f-cantidad',type: 'inline-input',templateOptions: {type: 'number',label: 'Superficie al Finalizar'}},{key:'f-valor-unitario',type: 'inline-input',templateOptions: {type: 'number',label: 'Costo por Hectárea'}},]}// sin vraci
    ];
    $rootScope.coders = [
      // A
      {
        'total':"calcItem.cantidad * calcItem.precio;"
      },
      // B
      {
        'dfp':"calcItem.vida-(hoy-year);",
        'monto':"($rootScope.categorySelected.valor * calcItem.nuevo)/100;",
        'vraci':"((calcItem.nuevo - calculado.monto)*calculado.dfp/calcItem.vida + calculado.monto)*calcItem.cantidad;",
        'cad':"(calculado.vraci - calculado.monto)/calculado.dfp;",
      },
      // C
      {
        'total':"calcItem.cantidad * calcItem.precio;",
        'dfp':"calcItem.vida-(hoy-year);",
        'vraci':"(calculado.total * calculado.dfp)/calcItem.vida;",
        'cad':"calculado.vraci/calculado.dfp",
      },
      // D
      {
        'total':"calcItem.cantidad * calcItem.precio;",
        'dfp':"calcItem.vida-(hoy-year);",
        'monto':"($rootScope.categorySelected.valor * calcItem.precio)/100;",
        'vraci':"calcItem.precio - calculado.monto)*calculado.dfp/calcItem.vida + calculado.monto;",
        'cad':"(calculado.vraci - calculado.monto)/calculado.dfp;",
      },
      // E
      {
        'c-total':"calcItem.c-cantidad * calcItem.c-precio;",
        'f-total':"calcItem.f-cantidad * calcItem.f-precio;",
        'diferencia':"calculado.c-total + calculado.f-total;",
      }
    ];
    $scope.$on('$ionicView.beforeEnter', function () {
      $rootScope.categorySelected = $rootScope.categorias[0];
    });
    $scope.goToInv = function(catId){
        $state.go('tabsController.particularInv', {catId: catId})
    }
}])

.controller('balancesCtrl', ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {


}])

.controller('particularCtrl', ['$scope', '$stateParams', '$state', '$rootScope', function ($scope, $stateParams, $state, $rootScope) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $rootScope.categorySelected = $rootScope.categorias.filter(function (items) {return items.id == $stateParams.catId;})[0];
    helper = JSON.parse(window.localStorage.getItem("inv-item"));
    console.log(helper);
    $scope.invElements = helper.filter(function (item) {return item.cat === parseInt($stateParams.catId);});
  });
  $scope.goTo = function(itemId){
      $state.go('tabsController.item', {itemId: itemId})
  }

}])

.controller('aAdirAlInventarioCtrl', ['$scope', '$stateParams', '$rootScope', function ($scope, $stateParams, $rootScope) {
  $scope.action='Añadir';
  $scope.inv = {
    'id' : 0,
    'cat': $rootScope.categorySelected
  }
  $scope.invFields = $rootScope.categorySelected.fields;
  $scope.sendToStorage = function() {
    var items;
    var aux = window.localStorage.getItem("inv-item");
    if( aux !== undefined){
      items = JSON.parse(aux);
    }
    $scope.inv.cat = $scope.inv.cat.id
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
      'cat': $rootScope.categorySelected
    }
  }
}])

.controller('itemCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory','$rootScope', function ($scope, $stateParams, $state, $ionicHistory, $rootScope) {
  $scope.$on('$ionicView.beforeEnter', function () {
    $scope.aux = JSON.parse(window.localStorage.getItem("inv-item"))
    var myDictionary = $scope.aux.filter(function (items) {return items.id == $stateParams.itemId;})[0];
    $scope.name = myDictionary.item;
    $scope.item = [];
    Object.keys(myDictionary).forEach(key => {
        if (key!='id' && key!='cat' && key!='item'){
            var value = myDictionary[key];
            console.log(key+" : "+value);
            $scope.item.push({'key':key,'value':value});
        }
    });
    if ("comprado" in myDictionary){
      myDictionary.comprado = new Date(myDictionary.comprado);
      var year = myDictionary.comprado.getFullYear();
    }
    var calcItem = myDictionary ;
    var calculado = {};
    var hoy = new Date().getFullYear();
    var code = $rootScope.coders[$rootScope.categorySelected.do];
    Object.keys(code).forEach(key => {
      var value = code[key];
      calculado[key] = eval(value);
    });
    $scope.calculados = calculado;
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
    $scope.invFields = $rootScope.categorySelected.fields;
    $scope.aux = JSON.parse(window.localStorage.getItem("inv-item"));
    $scope.inv = $scope.aux.filter(function (item) {return item.id == parseInt($stateParams.modItem);})[0];
    if ("comprado" in $scope.inv){
      $scope.inv.comprado = new Date($scope.inv.comprado);
    }
    $scope.action="Modificar";
  });

  $scope.sendToStorage = function() {
    $scope.aux.filter(function (item) {return item.id == parseInt($stateParams.modItem);})[0] = $scope.inv;
    window.localStorage.setItem("inv-item", JSON.stringify($scope.aux));
    $state.go('tabsController.item', {itemId: $stateParams.modItem})
  }
}])
.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
})
