let dropdownList = document.querySelectorAll(".dropdown");
dropdownList.forEach((dropdown, index) => {
	let dropdownValue = dropdown.querySelector(".dropdown__value");
	let dropdownItemList = dropdown.querySelector(".dropdown__list");

	dropdownValue.addEventListener('click', function() {
		dropdownItemList.classList.toggle("dropdown__list_active");
	})

	let LinkList = dropdown.querySelectorAll("a.dropdown__link");
	LinkList.forEach((link, index) => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
		}, false);
	})

	let listElements = dropdownItemList.querySelectorAll(".dropdown__item");
	listElements.forEach((el, index) => {
		el.addEventListener('click', function() {
			dropdownValue.textContent = el.children.item(0).textContent;
			dropdownItemList.classList.remove("dropdown__list_active");
		})
	})
})