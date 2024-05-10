let tooltipItems = document.querySelectorAll('.has-tooltip')

tooltipItems.forEach(tooltip => {
	tooltip.addEventListener('click', function(e) {

		e.preventDefault();
		let title = tooltip.getAttribute("title");
		let tooltipItemsActive = document.getElementsByClassName('tooltip_active');

		i = tooltipItemsActive.length
		while (i > 0) {
			tooltipItemsActive[i - 1].remove()
			i--
		}
		const top = tooltip.getBoundingClientRect().bottom;
		const left = tooltip.getBoundingClientRect().left;
		tooltip.insertAdjacentHTML("afterEnd", '<div class="tooltip tooltip_active" style="left:' + left + 'px;top:' + top + 'px;">' + title + '</div>');
	})
})