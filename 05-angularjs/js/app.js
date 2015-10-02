var app = angular.module("myApp",['ngRoute']); //modulo que contiene los diferentes componetes de AngularJS

app.config(function($routeProvider){
	$routeProvider.when("/",
	{
		controller: "AppCtrl", //que controlador maneja
		templateUrl: "template/app.html"
  })
	.when('/view/:id',{
		controller: 'viewCtrl',
		templateUrl: '/template/view.html'
	})
	.otherwise({
        	redirectTo: "/"
    });

});

