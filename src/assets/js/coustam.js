
  new WOW().init();

  
  $('.banner-slider').slick({
    centerMode: false,
    slidesToShow: 1,
    autoplay:true,
    dots:true,
  });




  $('.juice-slider').slick({
    centerMode: false,
    slidesToShow: 4,
    autoplay:true,
    dots:true,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});







  $('.product-slider').slick({
    centerMode: false,
    slidesToShow: 4,
    autoplay:true,
    dots:true,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});

  $('.testimonial-sider').slick({
    centerMode: false,
    slidesToShow: 1,
    autoplay:true,
    dots:true,
  });



  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $("nav").addClass("solid-bg");
      }

      else{
       $("nav").removeClass("solid-bg"); 
     }
   })
  })



  $(document).ready(function(){
    $(".foter-bottom").click(function(){
      $(".foter-bottom").toggleClass("intro");
    });
  });