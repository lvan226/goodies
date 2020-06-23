// Главная страница

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
		alert('Выбирите больше одного товара');
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