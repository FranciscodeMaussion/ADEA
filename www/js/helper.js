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
