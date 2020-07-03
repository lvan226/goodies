let faqTabTitle = document.querySelectorAll('.faq-page__tab');

for (let i = 0; i < faqTabTitle.length; i++) {
	faqTabTitle[i].addEventListener('click', function () {
		this.classList.toggle('faq-page__tab--active');
	});
}