$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 0;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $('.rev-slider').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 4000,
      dots: true,
      arrows: true,
      fade: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></span>'
    });



});
 
