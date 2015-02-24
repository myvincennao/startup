var Movie = require("./movie.jsm")

function DownloadableMovie() {
	var downloadableMovie = {};
	downloadableMovie.__proto__ = Movie();
	downloadableMovie.downloadMethod = function downloadMethod() {
		console.log("Torrent");
		return "Torrent";
	}; 
	return downloadableMovie;
};

module.exports = DownloadableMovie;