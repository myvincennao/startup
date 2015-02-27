var Social = function (){};
Social.prototype = {
  share: function(friend) {
    console.log("sharing with " + friend)
  },
  like: function() {
    console.log("You liked " + this.title)
  }
}
function augment( receivingClass, givingClass ) {

    // only provide certain methods
    if ( arguments[2] ) {
        for ( var i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for ( var methodName in givingClass.prototype ) {

            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //  receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

var Movie = require("./movie.jsm");
function MovieObserver(){
  var playing = false;
  var movie = '';
}
MovieObserver.prototype = {
  constructor:MovieObserver,
  currentMovie: function(){
    console.log(this.movie);
    return this.movie;
  },
  startMovie: function(title){
    if (this.playing) {
      console.log('Movie ' + this.movie + 'is already playing');
      return('Movie ' + this.movie + 'is already playing');
    } else {
      this.movie = title;
      this.playing = true;
    }
  },
  stopMovie: function(){
    this.playing = false;
    this.movie = '';
  }
}
augment(Movie, Social, "share", "like");
var player = new MovieObserver();
var terminator = new Movie('Terminator', '192', player);
var frozen = new Movie('Frozen','130', player);
terminator.play();
frozen.stop();
terminator.play();
terminator.stop();
terminator.share("Martin");
terminator.like();