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

	var mixer = mixitup('.products__box');	
});