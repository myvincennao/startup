$(document).ready(function() {
  function focusTextArea() {
    $('textarea.alias').focus();
  };
  $('section.exercise1').fadeIn(400, focusTextArea);
  $('#success_button').on("click", function() {
    welcomeMessage('http://bootcamp.aws.af.cm/welcome/Yae');
  });
  $('#fail_button').on("click", function() {
    welcomeMessage('http://bootcamp.aws.af.cmaaa');
  });
  $('#spotify_button').on("click", function() {
    retriveSpotify();
  })
});
function addContentToSection(content) {
  $('section.exercise1').append('<p>' + content + '</p>');
  highlightName('Yae');
  
};
function highlightName(name) {
  var text = $('section.exercise1 p:last-child').text()
  text = text.replace(name, '<strong>' + name + '</strong>'); //Mi nombre en negrita
  $('section.exercise1 p:last-child').replaceWith('<p>' + text + '</p>'); //Reemplaza por la variable text que ya tiene mi nombre en negrita
};
function welcomeMessage(url) {
  $.get(url)
  .done(function(data) {
    addContentToSection(data.response);
  })
  .fail(function(data) {
    $('section.exercise1').css('color', 'red');
  });
};
function retriveSpotify() {
  var input = $("#query").val();
  $.get("https://api.spotify.com/v1/search?q=" + input + "&type=album")
  .done(function(data) {
    $.each(data.albums.items, function(i, album) {
      $('section.exercise2').append(  '<article class="album">' + 
          '<h1>' + album.name + '</h1>' +
          '<p>' + album.album_type + '</p>' +
          '<img src=' + album.images[0].url + '/>' +
          '<p>' + album.external_urls.spotify + '</p></article>')
    });
  }) 
  .fail(function(data) {
    console.log("fail");
  });
};