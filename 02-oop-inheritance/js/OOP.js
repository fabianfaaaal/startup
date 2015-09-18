var MoviesModule = (function() { // Ejercicio 7
	var module = {};
	module.Movie = Movie;
	module.DownloadableMovie = DownloadableMovie;

	function Movie(mTitle, mDescription, mDirector)
	{
		this.title = mTitle;
		this.description = mDescription;
		this.director = mDirector;
	}		
	
	// Prototipo Pelicula, Toma los datos y los setea en el objeto 'Movie' (Pelicula).
	Movie.prototype = {
		setTitle: function(miTitle) {
			this.title = mTitle;
		},
		getTitle: function() {
			return this.title;
		},
		setDescription: function(miDescription) {
			this.description = mDescription;
		},
		getDescription: function() {
			return this.description;
		},
		setDirector: function(miDirector) {
			this.director = mDirector;
		},
		getDirector: function() {
			return this.director;
		},	
		// FIN seteos.

		// Observadores para reproducir y parar.
		play : function() {
			MovieObserver.listenPlay(this);
		},
		stop : function() {
			MovieObserver.listenStop(this);
		},
		// Fin observadores

		toString : function() { //Esto permite mostrar los datos de la pelicula seleccionada.
			return this.title + "\n" + this.description + "\nDirector: " + this.director;
		}
	};

	var Share = {
		share: function(peli, nombreA) {
		console.log("Sharing " + peli.getTitle() + " with " + nombreA);
		},

		like: function() {
		}	
	};

	// Ejercicio 10.
	extend(Movie.prototype, Share);

	// Ejercicio 8.
	function DownloadableMovie(title, description, director) {
		Movie.call(this, title, description, director);	
	}

	DownloadableMovie.prototype = Object.create(Movie.prototype);

	DownloadableMovie.prototype.constructor = DownloadableMovie;

	DownloadableMovie.prototype.download = function() {
		console.log("Estas descargando: " + this.title);
	};

	return module;
})();

// Ejercicio 3 , 4 , 5 y 6
MovieObserver = (function () {
	var instance,

	init = function () {
	    return {
	    	listenPlay: function (peli) { //4
	      		console.log("Playing: " + peli.toString());
	     	},
	     	listenStop: function (peli) { //5
	      		console.log("Stopped - Termino la pelicula: " + peli.getTitle());
	     	}
    	};
	};

	return instance || init();

 })(); // Fin MovieObserver, clase observador


// Ejercicio 9
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

//Load
$(window).load(function() {	//Ejercicio 1 y 2

	var p1 = new MoviesModule.Movie(
		"Matrix", 
		"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.-IMDB",
		"The Wachowski Brothers"
		);	
		
	var p2= new MoviesModule.Movie(
		"Mad Max: Fury Road",
		"A woman rebels against a tyrannical ruler in post apocalyptic Australia in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.-IMDB",
		"George Miller"
		);

	var p3 = new MoviesModule.Movie(
		"Wild Tales",
		"Six short stories involving distressed people.-IMDB",
		"Damián Szifrón"
		);

	var p4 = new MoviesModule.DownloadableMovie(
		"The Secret in their Eyes",
		"A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.-IMDB",
		"Juan José Campanella"
		);		
	//console.log("Se definen las variables");
	var pelielegida = prompt("Por favor selecciona una película:\n1- Matrix (Play)\n2- Mad Max: Fury Road (Play)\n3- Wild Tales (Play)\n4- The Secret in their Eyes (Descargar)");
	var compartir = prompt("Comparte esta pelicula con: ");
	
	switch(pelielegida){
		case "1":
			p1.play();
			setTimeout(p1.stop(), 5000);
			p1.share(p1, compartir);	
			console.log(p1);
			break;
		case "2":
			p2.play();
			setTimeout(p2.stop(), 5000);
			p2.share(p2, compartir);
			console.log(p2);	
			break;
		case "3":
			p3.play();
			setTimeout(p3.stop(), 5000);
			p3.share(p3, compartir);	
			console.log(p3);
			break;
		case "4":
			p4.download(); //Para descargar la pelicula linea 62.
			p4.play(); // Prueba para ver si la herencia funciona.
			p4.share(p4, compartir);
			console.log(p4);
			console.log("DESCARGA?");
			break;
		default:
			console.log("--> No es una Opcion válida <--");
			break;
	} // FinSwitch	
		
}); //FinLoad

