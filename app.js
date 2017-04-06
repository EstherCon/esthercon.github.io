$(document).ready(function() {

  $(".main").css("display", "none");
  $(window).on('scroll', function() {
        $('.header').fadeOut(300)
        $('.main').fadeIn(600)
    })



})
