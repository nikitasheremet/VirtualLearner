$(document).ready(function() {
  $('textarea').keyup(function() {
    var remaining = 150 - jQuery(this).val().length;
    jQuery('.counter').text(remaining);
    if (remaining < 0){
      jQuery('.counter').text("Error: Length exceeded " + remaining);
      $(".counter").css({"color": "red"});
    } else if (remaining >= 0){
      jQuery('.counter').text(remaining);
      $(".counter").css({"color": "#444E3B"});
    }
  });
});
