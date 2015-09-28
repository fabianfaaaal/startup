var Direc = require('./director.js'); //llamo el modulo



function Movie(mTitle, mDescription, mDirector)
	{
		this.title = mTitle;
		this.description = mDescription;
		this.director = new Direc();
	}		
	
	// Prototipo Pelicula, Toma los datos y los setea en el objeto 'Movie' (Pelicula).
	Movie.prototype = {
		setTitle: function(mTitle) {
			this.title = mTitle;
		},
		getTitle: function() {
			return this.title;
		},
		setDescription: function(mDescription) {
			this.description = mDescription;
		},
		getDescription: function() {
			return this.description;
		},
		setDirector: function(mDirector) {
			this.director.setTitle(Direc(name));
		},
		getDirector: function() {
			return this.director;
		},	
	}

module.exports = Movie; //export el modulo (commonjs)
