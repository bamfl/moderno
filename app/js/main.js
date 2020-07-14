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

	$('.icon-th-large').on('click', function(){
		$('.product-page__item').removeClass('list'),
		$('.icon-th-large').addClass('active'),
		$('.icon-th-list').removeClass('active')
	})
	
	$('.icon-th-list').on('click', function(){
		$('.product-page__item').addClass('list'),
		$('.icon-th-list').addClass('active'),
		$('.icon-th-large').removeClass('active')
	})

	$('.menu__icon').on('click', function(){
		$('.menu__icon').toggleClass('active'),
		$('.menu__list').toggleClass('active'),
		$('.menu__body').toggleClass('active'),
		$('body').toggleClass('lock')
	})

	$('.user__box').on('click', function(){
		$('.user__box').toggleClass('active'),
		$('body').toggleClass('lock')
	})

	$('.notification__box').on('click', function(){
		$('.notification__box').toggleClass('active'),
		$('body').toggleClass('lock')
	})

	$('.message__box').on('click', function(){
		$('.message__box').toggleClass('active'),
		$('body').toggleClass('lock')
	})

	$('.basket__box').on('click', function(){
		$('.basket__box').toggleClass('active'),
		$('body').toggleClass('lock')
	})
	
	var mixer = mixitup('.products__box');	

});