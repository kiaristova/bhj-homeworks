const caseList = document.querySelectorAll('.rotator__case')
let i = 0
console.log(i)

let active = document.querySelector('.rotator__case_active')

let delay = active.getAttribute('data-speed')
console.log(delay)

let color = active.getAttribute('data-color')
if (color) active.style.color = color

const greeting = delay =>
    setTimeout(() => {
        active = document.querySelector('.rotator__case_active')
        caseList.forEach(el => el.classList.remove('rotator__case_active'))
        let nextDelay = 1000

        if (i < caseList.length-1) {
            active.nextElementSibling.classList.add('rotator__case_active')

            color = active.nextElementSibling.getAttribute('data-color')
            if (color) active.nextElementSibling.style.color = color

            nextDelay = active.nextElementSibling.getAttribute('data-speed')
            if (nextDelay) delay = nextDelay
            i++
        } else {
            i = 0
            caseList[0].classList.add('rotator__case_active')

            color = caseList[0].getAttribute('data-color')
            if (color) caseList[0].style.color = color

            nextDelay = caseList[0].getAttribute('data-speed')
            if (nextDelay) delay = nextDelay
        }

        greeting(delay)
        console.log(delay)
        console.log(i)

    }, delay)

greeting(delay)