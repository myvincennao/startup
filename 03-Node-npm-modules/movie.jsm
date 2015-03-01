function Movie() {
	this['title'] = null;
	this['director'] = null;
	this.play = function() {
		console.log("Playing: " + this['title']);
		return("Playing: " + this['title']);
	},
	this.stop = function() {
		console.log("Stopped Movie: " + this['title']);
		return ("Stopped Movie: " + this['title']);
	},
	this.setAttr = function(attr, value){
		this[attr] = value;
	},
	this.getAttr = function(attr){
		console.log(this[attr]);
		return this[attr];
	}
};
module.exports = Movie;