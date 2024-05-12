let hasTooltipItems = document.querySelectorAll('.has-tooltip')

hasTooltipItems.forEach(hasTooltip => {
	hasTooltip.addEventListener('click', function(e) {

		e.preventDefault();

		const title = hasTooltip.getAttribute("title");
		const top = hasTooltip.getBoundingClientRect().bottom;
		const left = hasTooltip.getBoundingClientRect().left;
		let tooltipItem = document.querySelector('.tooltip');

		if (tooltipItem) {
			if (title === tooltipItem.textContent) {
				tooltipItem.classList.toggle('tooltip_active')
			} else {
				tooltipItem.textContent = title
				tooltipItem.classList.add('tooltip_active')
				style = "position: absolute; top: " + top + "px; left: " + left + "px;"
				tooltipItem.setAttribute("style", style)
			}
		} else {
			hasTooltip.insertAdjacentHTML("afterEnd", '<div class="tooltip tooltip_active">' + title + '</div>');
			tooltipItem = document.querySelector('.tooltip');
			style = "position: absolute; top: " + top + "px; left: " + left + "px;"
			tooltipItem.setAttribute("style", style)
		}

	})
})