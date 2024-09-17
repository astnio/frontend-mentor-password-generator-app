const passwordStrengthLabel = document.querySelector(
	'.password-strength-meter-label'
);

export function evaluatePassword(password) {
	const passwordStrengths = ['Too Weak!', 'Weak', 'Medium', 'Strong'];
	const randomNum = Math.floor(Math.random() * passwordStrengths.length);

	passwordStrengthLabel.textContent = passwordStrengths[randomNum];
}
