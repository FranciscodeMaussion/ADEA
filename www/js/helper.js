window.localStorage.setItem("0", JSON.stringify({'id': 0,'nombre':'Mejoras','valor':5}));
window.localStorage.setItem("1", JSON.stringify({'id': 1,'nombre':'Tractores, Maquinarias y Rodados','valor':10}));
window.localStorage.setItem("2", JSON.stringify({'id': 2,'nombre':'Pasturas Perennes','valor':1}));
window.localStorage.setItem("3", JSON.stringify({'id': 3,'nombre':'Reproductores y Animales de Trabajo','valor':10}));
window.localStorage.setItem("4", JSON.stringify({'id': 4,'nombre':'Deposito','valor':0}));
window.localStorage.setItem("5", JSON.stringify({'id': 5,'nombre':'Granos Almacenados','valor':0}));
window.localStorage.setItem("6", JSON.stringify({'id': 6,'nombre':'Ganado Circulante','valor':0}));
window.localStorage.setItem("7", JSON.stringify({'id': 7,'nombre':'Ganado de Renta','valor':0}));
window.localStorage.setItem("8", JSON.stringify({'id': 8,'nombre':'Pasturas Anuales','valor':-1}));
window.localStorage.setItem("9", JSON.stringify({'id': 9,'nombre':'Cultivos Anuales','valor':-1}));

helper = JSON.parse(window.localStorage.getItem("inv-item"));
$scope.invElements = helper.filter(function (item) {return item.cat.id === 1;});
//0
[
  {
    key:'item',
    type: 'inline-input',
    templateOptions:{
      type: 'text',
      label: 'Nombre'
    }
  },
  {
    key:'cantidad',
    type: 'inline-input',
    templateOptions:{
      type: 'number',
      label: 'Cantidad de Hectáreas'
    }
  },
  {
    key:'precio',
    type: 'inline-input',
    templateOptions:{
      type: 'number',
      label: 'Precio por Hectárea'
    }
  }
]
//1, 2
[
  {
    key:'item',
    type: 'inline-input',
    templateOptions:{
      type: 'text',
      label: 'Item'
    }
  },
  {
    key:'estado',
    type: 'inline-input',
    templateOptions: {
      type: 'text',
      label: 'Estado'
    }
  },
  {
    key:'cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Cantidad'
    }
  },
  {
    key:'valor-nuevo',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Valor Nuevo'
    }
  },
  {
    key:'comprado',
    type: 'inline-input',
    templateOptions: {
      type: 'month',
      label: 'Año de Compra'
    }
  },
  {
    key:'vida',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Vida Util'
    }
  },
]
//3
[
  {
    key:'item',
    type: 'inline-input',
    templateOptions:{
      type: 'text',
      label: 'Tipo de Pastura'
    }
  },
  {
    key:'precio',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Costo por Hectárea'
    }
  },
  {
    key:'cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Superficie'
    }
  },
  {
    key:'implantado',
    type: 'inline-input',
    templateOptions: {
      type: 'month',
      label: 'Año de implantacion'
    }
  },
  {
    key:'vida',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Vida Útil'
    }
  }
]
//4
[
  {
    key:'item',
    type: 'inline-input',
    templateOptions:{
      type: 'text',
      label: 'Item'
    }
  },
  {
    key:'cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Cantidad'
    }
  },
  {
    key:'precio',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Valor Unitario'
    }
  },
  {
    key:'comprado',
    type: 'inline-input',
    templateOptions: {
      type: 'month',
      label: 'Año de Compra'
    }
  },
  {
    key:'vida',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Vida Util'
    }
  }
]
//5-9
[
  {
    key:'item',
    type: 'inline-input',
    templateOptions:{
      type: 'text',
      label: 'Item'
    }
  },
  {
    key:'c-cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Cantidad al Inicio'
    }
  },
  {
    key:'c-valor-unitario',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Valor Unitario'
    }
  },
  {
    key:'f-cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Cantidad al Finalizar'
    }
  },
  {
    key:'f-valor-unitario',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Valor Unitario'
    }
  },
]
// 10, 11
[
  {
    key:'item',
    type: 'inline-input',
    templateOptions:{
      type: 'text',
      label: 'Cultivo'
    }
  },
  {
    key:'lote',
    type: 'inline-input',
    templateOptions: {
      type: 'text',
      label: 'Lote'
    }
  },
  {
    key:'c-cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Superficie al Inicio'
    }
  },
  {
    key:'c-valor-unitario',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Costo por Hectárea'
    }
  },
  {
    key:'f-cantidad',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Superficie al Finalizar'
    }
  },
  {
    key:'f-valor-unitario',
    type: 'inline-input',
    templateOptions: {
      type: 'number',
      label: 'Costo por Hectárea'
    }
  },
]
$rootScope.coders = [
// A
{
  'total':"calc-item.cantidad * calc-item.precio;"
},
// B
{
  'dfp':"calc-item.vida-(hoy-year);",
  'monto':"($rootScope.categorySelected * calc-item.valor-nuevo)/100;",
  'vraci':"((calc-item.valor-nuevo - calculado.monto)*calculado.dfp/calc-item.vida + calculado.monto)*calc-item.cantidad;",
  'cad':"(calculado.vraci - calculado.monto)/calculado.dfp;",
},
// C
{
  'total':"calc-item.cantidad * calc-item.precio;",
  'dfp':"calc-item.vida-(hoy-year);",
  'vraci':"(calculado.total * calculado.dfp)/calc-item.vida;",
  'cad':"calculado.vraci/calculado.dfp",
},
// D
{
  'total':"calc-item.cantidad * calc-item.precio;",
  'dfp':"calc-item.vida-(hoy-year);",
  'monto':"($rootScope.categorySelected * calc-item.precio)/100;",
  'vraci':"calc-item.precio - calculado.monto)*calculado.dfp/calc-item.vida + calculado.monto;",
  'cad':"(calculado.vraci - calculado.monto)/calculado.dfp;",
},
// E
{
  'c-total':"calc-item.c-cantidad * calc-item.c-precio;",
  'f-total':"calc-item.f-cantidad * calc-item.f-precio;",
  'diferencia':"calculado.c-total + calculado.f-total;",
}
]
if ($rootScope.categorySelected.do == 'V'){
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
  if (a.cat.id == 4){
    $scope.calculados = {
      'dfp': dfp,
      'vr': vr,
      'vraci': vraci,
      'cad': cad,
      'tot':a.new*a.cant
    };
  }
}else if ($rootScope.categorySelected.do == 'T') {
  $scope.calculados = {
    'tot': a.cant*a.prec,
  };
}else if ($rootScope.categorySelected.do == 'A') {
  var dfp = a.life - ( hoy - year );
  if (dfp < 0){
    dfp = 0;
  }
  var vraci;
  var cad;
  var tot = a.cost*a.sup
  if (dfp !== 0){
    vraci = (tot*dfp)/a.life;
    cad = vraci/dfp
  }else{
    vraci = 0;
    cad = 0;
  }
  $scope.calculados = {
    'dfp': dfp,
    'tot': tot,
    'vraci': vraci,
    'cad': cad,
  };
}else if ($rootScope.categorySelected.do == 'CyF') {
  var tot1 = a.cant1*a.new1
  var tot2 = a.cant2*a.new2
  $scope.calculados = {
    'tot1': tot1,
    'tot2': tot2,
    'totfin': tot2-tot1,
  };
}
