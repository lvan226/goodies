let itemImageAll = document.querySelectorAll('.product-one__icons-image');
let itemImageMain = document.querySelector('.product-one__item-image');

for (let i = 0; i < itemImageAll.length; i++) {
	itemImageAll[i].addEventListener('click', function () {
		let srcset = itemImageAll[i].previousElementSibling.getAttribute('srcset');
		itemImageMain.setAttribute('src', itemImageAll[i].getAttribute('src'));
		itemImageMain.previousElementSibling.setAttribute('srcset', srcset);
	});
}