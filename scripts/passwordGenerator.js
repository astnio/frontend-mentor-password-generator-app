import { evaluatePassword } from './passwordEvaluator.js';

const charLengthSlider = document.getElementById('password-length-range');

export function getGeneratedPassword() {
	// const passwordslol = [
	// 	'password',
	// 	'p455w0rd',
	// 	'P4Ssw0rD',
	// 	'wordpass',
	// 	'loremIpsum',
	// 	'placeholder',
	// 	'test',
	// 	'p4s5h-lder',
	// 	't3s!p4Ss?',
	// ];

	// const randomNum = Math.floor(Math.random() * passwordslol.length);
	// const password = passwordslol[randomNum];

	let password = [];

	for (let i = 0; i < charLengthSlider.value; i++) {
		password.push('W');
	}

	password = password.join('');

	evaluatePassword(password);
	return password;
}
