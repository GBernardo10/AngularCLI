var app = angular.module('app',['ngRoute']);

app.config(function($routerProvider, $locationProvider){
	//remove o # da url
	$locationProvider.html5Mode(true);
	
	$routeProvider
	
	// para a rota '/', carregamos o template home.html e o controller 'HomeCtrl'
	
	.when('/',{
		templateUrl : 'app/views/home.html',
		controller : 'HomeCtrl',
	})
	
	.when('/sobre', {
		templateUrl : 'app/views/sobre.html',
		controller : 'SobreCtrl',
	})
	
	.when('/contato',{
		templateUrl : 'app/views/contato.html',
		controller : 'ContatoCtrl',
	})
	
	// caso nao seja nenhum desses, redirecione para a rota '/'
	.otherwise({redirectTo: '/'});
});