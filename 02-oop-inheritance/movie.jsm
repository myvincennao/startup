function Movie(title, duration, player) {
	this.title = title;
	this.duration = duration;
	this.player = player;
	this.play = function() {
		this.player.startMovie(this.title);
		console.log("Playing: " + this.title);
		return("Playing: " + this.title);
	},
	this.stop = function() {
		if (this.title == this.player.movie) {
			this.player.stopMovie();
			console.log("Stopped Movie: " + this.title);
			return ("Stopped Movie: " + this.title);
		} else {
			console.log("This movie isn't playing");
			return ("This movie isn't playing");
		}
	},
	this.set = function(attr, value){
		this[attr] = value;
	},
	this.get = function(attr){
		console.log(this[attr]);
		return this[attr];
	}
};
module.exports = Movie;