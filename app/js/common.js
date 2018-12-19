$(function() {

	// Custom JS
	// $('.review-sertificates').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Загрузка изображения #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
	// 		titleSrc: function (item) {
	// 			return item.el.attr('title');
	// 		}
	// 	}
	// });

	$('.totop').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000)
	})

});
