$(function () {
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
				breakpoint: 1350,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
		
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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

	$('.icon-th-large').on('click', function () {
		$('.product-page__item').removeClass('list'),
			$('.icon-th-large').addClass('active'),
			$('.icon-th-list').removeClass('active')
	});

	$('.icon-th-list').on('click', function () {
		$('.product-page__item').addClass('list'),
			$('.icon-th-list').addClass('active'),
			$('.icon-th-large').removeClass('active')
	});

	$('.menu__icon').on('click', function () {
		$('.menu__icon').toggleClass('active'),
			$('.menu__list').toggleClass('active'),
			$('.menu__body').toggleClass('active'),
			$('body').toggleClass('lock')
	});

	$('.user__box').on('click', function () {
		$('.user__box').toggleClass('active'),
			$('body').toggleClass('lock')
	});

	$('.notification__box').on('click', function () {
		$('.notification__box').toggleClass('active'),
			$('body').toggleClass('lock')
	});

	$('.message__box').on('click', function () {
		$('.message__box').toggleClass('active'),
			$('body').toggleClass('lock')
	});

	$('.basket__box').on('click', function () {
		$('.basket__box').toggleClass('active'),
			$('body').toggleClass('lock')
	});


	//product-datails
	$('.tab__title_1').on('click', function () {
		$('.tab__title_1').toggleClass('active'),
			$('.tab__inner_1').toggleClass('active'),
			$('.tab__title_2,.tab__title_3,.tab__title_4').removeClass('active'),
			$('.tab__inner_2,.tab__inner_3,.tab__inner_4').removeClass('active')
	});
	$('.tab__title_2').on('click', function () {
		$('.tab__title_2').toggleClass('active'),
			$('.tab__inner_2').toggleClass('active'),
			$('.tab__title_1,.tab__title_3,.tab__title_4').removeClass('active'),
			$('.tab__inner_1,.tab__inner_3,.tab__inner_4').removeClass('active')
	});
	$('.tab__title_3').on('click', function () {
		$('.tab__title_3').toggleClass('active'),
			$('.tab__inner_3').toggleClass('active'),
			$('.tab__title_1,.tab__title_2,.tab__title_4').removeClass('active'),
			$('.tab__inner_1,.tab__inner_2,.tab__inner_4').removeClass('active')
	});
	$('.tab__title_4').on('click', function () {
		$('.tab__title_4').toggleClass('active'),
			$('.tab__inner_4').toggleClass('active'),
			$('.tab__title_1,.tab__title_2,.tab__title_3').removeClass('active'),
			$('.tab__inner_1,.tab__inner_2,.tab__inner_3').removeClass('active')
	});


	// //settings
	// $('.settings__tab_info').on('click', function(){
	// 	$('.settings__tab_info').toggleClass('active'),
	// 	$('.settings__item_info').toggleClass('active'),
	// 	$('.settings__tab_profile, .settings__tab_badges, .settings__tab_email, .settings__tab_social').removeClass('active'),
	// 	$('.settings__item_profile, .settings__item_badges, .settings__item_email, .settings__item_social').removeClass('active')
	// });
	// $('.settings__tab_profile').on('click', function(){
	// 	$('.settings__tab_profile').toggleClass('active'),
	// 	$('.settings__item_profile').toggleClass('active'),
	// 	$('.settings__tab_info, .settings__tab_badges, .settings__tab_email, .settings__tab_social').removeClass('active'),
	// 	$('.settings__item_info, .settings__item_badges, .settings__item_email, .settings__item_social').removeClass('active')
	// });
	// $('.settings__tab_badges').on('click', function(){
	// 	$('.settings__tab_badges').toggleClass('active'),
	// 	$('.settings__item_badges').toggleClass('active'),
	// 	$('.settings__tab_profile, .settings__tab_info, .settings__tab_email, .settings__tab_social').removeClass('active'),
	// 	$('.settings__item_profile, .settings__item_info, .settings__item_email, .settings__item_social').removeClass('active')
	// });
	// $('.settings__tab_email').on('click', function(){
	// 	$('.settings__tab_email').toggleClass('active'),
	// 	$('.settings__item_email').toggleClass('active'),
	// 	$('.settings__tab_profile, .settings__tab_badges, .settings__tab_info, .settings__tab_social').removeClass('active'),
	// 	$('.settings__item_profile, .settings__item_badges, .settings__item_info, .settings__item_social').removeClass('active')
	// });
	// $('.settings__tab_social').on('click', function(){
	// 	$('.settings__tab_social').toggleClass('active'),
	// 	$('.settings__item_social').toggleClass('active'),
	// 	$('.settings__tab_profile, .settings__tab_badges, .settings__tab_info, .settings__tab_email').removeClass('active'),
	// 	$('.settings__item_profile, .settings__item_badges, .settings__item_info, .settings__item_email').removeClass('active')
	// });

	//Табы	
	$(".tab").click(function () {
		$(".tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabitem").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabitem").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Form Styler
	$('input, select').styler();

	var mixer = mixitup('.products__box');

});