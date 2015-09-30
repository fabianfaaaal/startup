var app = angular.module("myApp",['ngRoute']); //modulo que contiene los diferentes componetes de AngularJS

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "template/app.html",
      controller: "AppCtrl", //que controlador maneja
    })
    .when('/view/:id',{
      controller: 'viewCtrl',
      templateUrl: '/template/view.html'
    })
});



console.log("app.js okk!");