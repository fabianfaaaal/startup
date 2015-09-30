app.controller('AppCtrl', ['$scope', function($scope) {
  $scope.title = 'Aprendiendo AngularJS Movies';
  $scope.movies = [ 
  { 
    name: 'Matrix', 
    year: 1999, 
    about: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", 
    img: 'http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX214_AL_.jpg'
  },
  {
  	name: 'Indiana Jones', 
    year: 1984, 
    about: 'After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees, and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.', 
    img: 'http://ia.media-imdb.com/images/M/MV5BMTMyNzI4OTA5OV5BMl5BanBnXkFtZTcwMDQ2MjAxNA@@._V1_SX214_AL_.jpg'
  }

  ];
  $scope.deleteMovies = function (index) {
        $scope.movies.splice(index, 1);
        console.log("Borro Pelicula nº"+index);
    };


}]);

console.log("MainController Working");