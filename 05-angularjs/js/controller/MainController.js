app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Aprendiendo AngularJS';
  $scope.movies = [ 
  { 
    name: 'Matrix', 
    year: 1999, 
    about: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", 
    img: 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX214_AL_.jpg',
  }; 


console.log("MainController Working");