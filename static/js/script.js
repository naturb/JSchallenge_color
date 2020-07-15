var all_buttons = document.getElementsByTagName('button');


var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++ ) {
	copyAllButtons.push(all_buttons[i].classList[1]);
}



function buttonColorChange(buttonThingy) {
	if (buttonThingy.value === 'red') {
		buttonsRed();
	}
	else if (buttonThingy.value === 'blue') {
		buttonsBlue();
	}
	else if (buttonThingy.value === 'green') {
		buttonsGreen();
	}
	else if (buttonThingy.value === 'grey') {
		buttonsGrey();
	}
	else if (buttonThingy.value === 'reset') {
		buttonsReset();
	}
	else if (buttonThingy.value === 'random') {
		randomColors();
	}
}

function buttonsRed() {
	for (let i=0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-danger');
	}
}
function buttonsBlue() {
	for (let i=0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-primary');
	}
}
function buttonsGreen() {
	for (let i=0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-success');
	}
}
function buttonsGrey() {
	for (let i=0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add('btn-secondary');
	}
}
function buttonsReset() {
	for (let i=0; i < all_buttons.length; i++) {
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(copyAllButtons[i]);
	}
}
function randomColors() {
	let choices = ['btn-danger', 'btn-primary', 'btn-success', 'btn-secondary']

	for (let i=0; i < all_buttons.length; i++){
		let randomNumber = Math.floor(Math.random()*4);
		all_buttons[i].classList.remove(all_buttons[i].classList[1]);
		all_buttons[i].classList.add(choices[randomNumber]);
	}
}

