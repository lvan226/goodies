document.addEventListener('DOMContentLoaded', function() {
	svg4everybody();

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

// Анимация движения кнопок у продукта
let btnBuy = document.querySelectorAll('.sales-leaders__buy');
let btnQuantity = document.querySelectorAll('.sales-leaders__quantity-btn');

forArr(btnBuy, 'click', function() {
	this.classList.remove('sales-leaders__buy--active');
});

forArr(btnQuantity, 'click', function() {
	let anc = findAncestor(this, 'sales-leaders__quantity');
	let child = anc.querySelector('.sales-leaders__quantity-input');

	console.log(child.value);
	if (Number(child.value) > 0) {
		anc.classList.remove('sales-leaders__quantity--active');
	}
})

function forArr(arr, event, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].addEventListener(event, func)
	}
}

// Функция нахождения предка по классу
function findAncestor (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}


// Главная страница END

});