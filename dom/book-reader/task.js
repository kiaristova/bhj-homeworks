const book = document.getElementById('book')
const bookControls = document.querySelector('.book__controls')

let LinkList = bookControls.querySelectorAll("a");

LinkList.forEach(link => {
	link.addEventListener('click', function(e) {

		e.preventDefault();

		const parent = link.parentElement

		//font-size
		if (parent.classList.contains('book__control_font-size')) {
			const arrayChildren = Array.from(parent.children)
			arrayChildren.forEach(el => {
				if (el.classList.contains('font-size_active')) el.classList.remove('font-size_active')
			})

			link.classList.add('font-size_active')
			if (link.getAttribute('data-size') === 'small') {
				book.classList.add('book_fs-small')
				book.classList.remove('book_fs-big')
			} else if (link.getAttribute('data-size') === 'big') {
				book.classList.add('book_fs-big')
				book.classList.remove('book_fs-small')
			} else {
				if (book.classList.contains('book_fs-big')) book.classList.remove('book_fs-big')
				if (book.classList.contains('book_fs-small')) book.classList.remove('book_fs-small')
			}
		}

		//text-color
		if (parent.classList.contains('book__control_color')) {
			const arrayChildren = Array.from(parent.children)
			const textColorList = Array()
			arrayChildren.forEach(el => {
				if (el.classList.contains('color_active')) el.classList.remove('color_active')
				if (el.getAttribute('data-text-color')) textColorList.push(el.getAttribute('data-text-color'))
			})

			link.classList.add('color_active')

			textColorList.forEach(color => {
				if (book.classList.contains('book_color-' + color)) book.classList.remove('book_color-' + color)
			})

			const textColor = link.getAttribute('data-text-color')
			book.classList.add('book_color-' + textColor)
		}

		//background
		if (parent.classList.contains('book__control_background')) {
			const arrayChildren = Array.from(parent.children)
			const bgList = Array()
			arrayChildren.forEach(el => {
				if (el.classList.contains('color_active')) el.classList.remove('color_active')
				if (el.getAttribute('data-bg-color')) bgList.push(el.getAttribute('data-bg-color'))
			})

			link.classList.add('color_active')

			bgList.forEach(bg => {
				if (book.classList.contains('book_bg-' + bg)) book.classList.remove('book_bg-' + bg)
			})

			const bgColor = link.getAttribute('data-bg-color')
			book.classList.add('book_bg-' + bgColor)
		}

	}, false);
})