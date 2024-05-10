const productList = document.querySelectorAll('.product')
const cartProducts = document.querySelector('.cart__products')

productList.forEach(product => {
    const btnPlus = product.querySelector('.product__quantity-control_inc')
    const btnMinus = product.querySelector('.product__quantity-control_dec')
    let countProduct = product.querySelector('.product__quantity-value')
    const btnCartAdd = product.querySelector('.product__add')

    btnPlus.addEventListener('click', function(e) {
        e.preventDefault()
        countText = Number(countProduct.textContent)+1
        countProduct.textContent = countText
    })

    btnMinus.addEventListener('click', function(e) {
        e.preventDefault()
        countText = Number(countProduct.textContent)-1
        countProduct.textContent = countText
    })

    
    btnCartAdd.addEventListener('click', function(e) {
        const productId = product.getAttribute('data-id')
        const productImg = product.querySelector('.product__image').getAttribute("src")
        let productCountText = countProduct.textContent
        if (cartProducts.childElementCount == 0) {
            cartProducts.insertAdjacentHTML("BeforeEnd",'<div class="cart__product" data-id="'+productId+'"><img class="cart__product-image" src="'+productImg+'"><div class="cart__product-count">'+productCountText+'</div></div>')
        } else {
            // console.log(cartProducts.children)
            let cartProductsList = cartProducts.querySelectorAll('.cart__product')
            let idInCart = 0
            cartProductsList.forEach((cartItem,index) => {
                console.log(cartItem.getAttribute('data-id'))
                if (cartItem.getAttribute('data-id') === productId) {
                    idInCart = index+1
                }
            })
            if (idInCart>0) {
                idInCart = idInCart - 1
                let text = cartProductsList[idInCart].querySelector('.cart__product-count').textContent
                let textNew = Number(text) + Number(productCountText)
                cartProductsList[idInCart].querySelector('.cart__product-count').textContent = textNew
            } else {
                cartProducts.insertAdjacentHTML("BeforeEnd",'<div class="cart__product" data-id="'+productId+'"><img class="cart__product-image" src="'+productImg+'"><div class="cart__product-count">'+productCountText+'</div></div>')
            }

        }
        countProduct.textContent = 1
    })
})

