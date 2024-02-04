const elementsList = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

elementsList.forEach(element => {
    element.onclick = function() {
        if (element.classList.contains('hole_has-mole')) {
            dead.textContent = String(Number(dead.textContent) + 1);
        } else {
            lost.textContent = String(Number(lost.textContent) + 1);
        }
        if ((Number(dead.textContent) > 9) && (Number(lost.textContent) < 5)) {
            alert("Победа!");
            dead.textContent = "0";
            lost.textContent = "0";
        }
        if (Number(lost.textContent) > 4) {
            alert("Вы проиграли!");
            dead.textContent = "0";
            lost.textContent = "0";
        }
    }
});