let filterItem = document.querySelectorAll('.catalog__category-item');
let filterLink = document.querySelectorAll('.catalog__link');

for (let i = 0; i < filterLink.length; i++) {
	filterLink[i].addEventListener('click', function (e) {
		e.preventDefault();

		if (!filterItem[i].classList.contains('catalog__category-item--active')) {
			filterItem[i].classList.add('catalog__category-item--active');
		} else {
			filterItem[i].classList.remove('catalog__category-item--active');
		}
	});
}

$('.catalog__slider').slick({
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"></button>',
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true,
			}
		},
		// {
		// 	breakpoint: 576,
		// 	settings: {
		// 		slidesToShow: 1,
		// 	}
		// }
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});