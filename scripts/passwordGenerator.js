import { evaluatePassword } from './passwordEvaluator.js';

export function getGeneratedPassword() {
	const passwordslol = [
		'password',
		'p455w0rd',
		'P4Ssw0rD',
		'wordpass',
		'loremIpsum',
		'placeholder',
		'test',
		'p4s5h-lder',
		't3s!p4Ss?',
	];
	const randomNum = Math.floor(Math.random() * passwordslol.length);
	const password = passwordslol[randomNum];
	evaluatePassword(password);
	return password;
}
