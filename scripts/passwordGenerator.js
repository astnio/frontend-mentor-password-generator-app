import { evaluatePassword } from './passwordEvaluator.js';

const charLengthSlider = document.getElementById('password-length-range');

const chkUpperCase = document.getElementById('chk-include-uppercase-letters');
const chkLowerCase = document.getElementById('chk-include-lowercase-letters');
const chkNumber = document.getElementById('chk-include-numbers');
const chkSymbols = document.getElementById('chk-include-symbols');

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLowercaseLetter() {
	return String.fromCharCode(getRandomNumber(97, 122));
}

function getUppercaseLetter() {
	return String.fromCharCode(getRandomNumber(65, 90));
}

function getNumber() {
	return String.fromCharCode(getRandomNumber(48, 57));
}

function getSymbol() {
	const symbols = [
		getRandomNumber(33, 47),
		getRandomNumber(58, 64),
		getRandomNumber(91, 96),
		getRandomNumber(123, 126),
	];
	return String.fromCharCode(symbols[getRandomNumber(0, symbols.length - 1)]);
}

export function getGeneratedPassword() {
	let password = [];
	let userCharFunctions = [];

	if (chkUpperCase.checked) userCharFunctions.push(getUppercaseLetter);
	if (chkLowerCase.checked) userCharFunctions.push(getLowercaseLetter);
	if (chkNumber.checked) userCharFunctions.push(getNumber);
	if (chkSymbols.checked) userCharFunctions.push(getSymbol);

	for (let i = 0; i < charLengthSlider.value; i++) {
		const randomNumber = Math.floor(Math.random() * userCharFunctions.length);
		password.push(userCharFunctions[randomNumber]());
	}

	password = password.join('');

	evaluatePassword(password, charLengthSlider.value);
	return password;
}
