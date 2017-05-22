$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });

  $('.number').mouseleave(function() {
    $('.footnote').removeClass('showme');
  });

  $('.blueheader').mouseenter(function() {
    $('.highlight').addClass('showme');
  });

  $('.blueheader').mouseleave(function() {
    $('.highlight').removeClass('showme');
  });

  $('.thumbnail').mouseenter(function() {
    $('.thumbnail').addClass('enlarge');
  });

  $('.thumbnail').click(function() {
   $(this).toggleClass('enlarge');
  });


});
