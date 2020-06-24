document.addEventListener('DOMContentLoaded', function() {
	svg4everybody();

	// Главная страница

// Шапка

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');
let headerClose = document.querySelector('.header__close');

headerBurger.addEventListener('click', function() {
	headerMenu.classList.add('header__menu--open');
});

headerClose.addEventListener('click', function() {
	headerMenu.classList.remove('header__menu--open');
});

// Шапка

// Слайдер в категориях
$('.hero__slider').slick({
	arrows: false,
	dots: true,
});

// Запрещаем пользователю вводить большее число для поля input[type=number]
// let input = document.querySelectorAll('.js-input-number');

// for (let i = 0; i < input.length; i++) {
// 	input[i].addEventListener('input', function() {
// 		if (Number(input[i].value) > input[i].max) {
// 			input[i].value = input[i].max;
// 		}
// 	});
// }

// Слайдер продуктов
$('.sales-leaders__slider').slick({
	slidesToShow: 5,
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"></button>',
	responsive: [
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

// Переключение кнопок у продукта
let btnBuy = document.querySelectorAll('.card-product__btn-buy');
let btnQuantity = document.querySelectorAll('.card-product__quantity-btn');

forArr(btnBuy, 'click', function () {
	this.classList.remove('card-product__btn-buy--active');
});

forArr(btnQuantity, 'click', function () {
	let anc = findAncestor(this, 'card-product__quantity');
	let child = anc.querySelector('.card-product__quantity-input');

	if (Number(child.value) > 0) {
		anc.classList.remove('card-product__quantity--active');
	} else {
		alert('Выберите больше одного товара');
	}
})

// Перебор массива и присвоение каждому элементу addEvetnListener
function forArr(arr, event, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].addEventListener(event, func)
	}
}

// Функция нахождения предка по классу
function findAncestor(el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}

// Слайдер скидки (discount-slider)
$('.discount-slider').slick({
	slidesToShow: 3,
	infinite: true,
	variableWidth: true,
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"></button>',
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button"></button>',

});



// Главная страница END

});