$(function(){ 
	$(".item-products__rate-star").rateYo({
	  rating: 5,
	  starWidth: "12px",
	  readOnly: true
	});

	$('.products-slider__inner').slick({
		arrows: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		focusOnSelect: false,
		dots: true,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				
			  }
			}
		]
	});

	$(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

	var mixer = mixitup('.products__box');	
});