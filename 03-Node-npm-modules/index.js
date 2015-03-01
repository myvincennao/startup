var Movie = require("./movie.jsm");
var Director = require("./director.jsm");
var $ = require('jquery')(window);
global.jQuery = require("jquery");

var terminator = new Movie('terminator', '192');

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.setAttr('quotes', ['Cast is everything.', 'Do what ...']);
alien.setAttr('director', ridleyScott);
alien.getAttr('director').speak(); //output: Ridley Scott says: 'Cast is...'

function showQuotes(director) {
	if (director['quotes'].length !== 0) {
		$('body').append('<ol class=quotes> </ol>');
		var list = $('.quotes');
		director['quotes'].forEach(function(item) {list.append('<li> says: ' + item + '</li>')})
	}
};

showQuotes(ridleyScott);