$(".slider").slick({
    settings: "unslick",
    slidesToShow: 3,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 768, // 500px未満で・・・
          settings: {
              adaptiveHeight: true,
              centerMode: true,
              centerPadding: "15%",
              dots: true,
              variableWidth: true,
              slidesToShow: 1,
            }
        },
      ],   
});
