const clicker = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed');

let timeStart = Date.now();

i = 0;
cookie.onclick = function() {
	let timeClick = Date.now();
	let speedTime = 1 / ((timeClick - timeStart) / 1000);
	speed.textContent = speedTime.toFixed(2);
	clicker.textContent = Number(clicker.textContent) + 1;

	if (i === 0) {
		cookie.width += 50;
		cookie.height += 50;
		i++;
	} else {
		i--;
		cookie.width -= 50;
		cookie.height -= 50;
	}

	timeStart = timeClick;
};