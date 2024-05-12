const productList = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')

productList.forEach(product => {
	const btnPlus = product.querySelector('.product__quantity-control_inc')
	const btnMinus = product.querySelector('.product__quantity-control_dec')
	let countProduct = product.querySelector('.product__quantity-value')
	const btnCartAdd = product.querySelector('.product__add')

	btnPlus.addEventListener('click', function(e) {
		e.preventDefault()
		countText = Number(countProduct.textContent) + 1
		countProduct.textContent = countText
	})

	btnMinus.addEventListener('click', function(e) {
		e.preventDefault()
		countText = Number(countProduct.textContent) - 1
		if (countText < 1) {
			countText = 1
		}
		countProduct.textContent = countText
	})


	btnCartAdd.addEventListener('click', function(e) {
		const productId = product.getAttribute('data-id')
		const productImg = product.querySelector('.product__image').getAttribute("src")
		let productCountText = countProduct.textContent

		let cartProductsList = cartProducts.querySelectorAll('.cart__product')

		const findProductCart = (array, productId) => {
			for (let i = 0; i < array.length; i++) {
				if (array[i].getAttribute('data-id') === productId) {
					return array[i]
				}
			}
			return undefined
		}

		const productInCart = findProductCart(cartProductsList, productId)

		if (!productInCart) {
			cartProducts.insertAdjacentHTML("BeforeEnd", '<div class="cart__product" data-id="' + productId + '"><img class="cart__product-image" src="' + productImg + '"><div class="cart__product-count">' + productCountText + '</div></div>')
		} else {
			let text = productInCart.querySelector('.cart__product-count').textContent
			let textNew = Number(text) + Number(productCountText)
			productInCart.querySelector('.cart__product-count').textContent = textNew
		}
		countProduct.textContent = 1
	})
})