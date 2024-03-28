const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabs.forEach(s => s.classList.remove('tab_active'));
		contents.forEach((k) => k.classList.remove('tab__content_active'));
		contents[index].classList.add('tab__content_active');
		tab.classList.add('tab_active');
	});
})