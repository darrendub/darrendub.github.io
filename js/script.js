$('#menu').click(function(){
  $('nav').toggleClass("is-visible");
  $(window).scroll(function () {
    $('nav').removeClass("is-visible", ($(window).scrollTop() > 100));
   });
});
