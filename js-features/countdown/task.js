const timerBlock = document.getElementById('timer');
let timer = timerBlock.textContent;

function setTimer(second) {
	let time = new Date();
	time.setHours(0, 0, 0, 0);
	time.setSeconds(time.getSeconds() + second);
	return time.toTimeString().slice(0, 8);
}

timerBlock.textContent = setTimer(timer);

let timerId = setInterval(function() {
	if (timer > 0) {
		timer -= 1;
		timerBlock.textContent = setTimer(timer);
	} else {
		alert('Вы победили в конкурсе!');
		clearInterval(timerId);
	}
}, 1000);