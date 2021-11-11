$(document).ready(function(){
  $('nav a').on('click', function(event) {
    event.preventDefault();

    let href = $(this).attr('href');

    let headerHeight = $('.header').height();

    let offset = $(href).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: offset,
    }, 700);
  });

  $('.to-top').on('click', function(event) {
    event.preventDefault();

    $('body, html').animate({
      scrollTop: 0,
    }, 700);
  });
});