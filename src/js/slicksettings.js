$('.team-carousel').slick(

   {
      mobileFirst: true,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 360,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });