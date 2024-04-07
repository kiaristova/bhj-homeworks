const revealList = document.querySelectorAll('.reveal')

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect()

    if (bottom < 0) {
        return false
    }

    if (top > window.innerHeight) {
        return false
    }
    return true
}

document.addEventListener('scroll', (event) => {
    revealList.forEach((el, index) => {
        if (isVisible(el)) {
            el.classList.add('reveal_active');
        }
        if (!isVisible(el)) {
            el.classList.remove('reveal_active');
        }
    })
})