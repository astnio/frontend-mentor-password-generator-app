const passwordStrengthLabel = document.querySelector(
	'.password-strength-meter-label'
);

const passwordStrengthMeterBars = document.querySelectorAll(
	'.password-strength-meter-bar'
);

const passwordStrengths = {
	'Too Weak!': 0,
	Weak: 1,
	Medium: 2,
	Strong: 3,
};

export function evaluatePassword(password) {
	//not using password right now, will implement later

	const passwordStrengthsValues = Object.values(passwordStrengths);
	const randomNum = Math.floor(Math.random() * passwordStrengthsValues.length);
	passwordStrengthLabel.textContent = getPasswordStrengthValue(randomNum);

	setPasswordStrengthMeter(randomNum);
}

function getPasswordStrengthValue(strength) {
	return Object.keys(passwordStrengths).find(
		(key) => passwordStrengths[key] === strength
	);
}

function setPasswordStrengthMeter(passwordStrength) {
	resetPasswordStrengthMeters();

	let color = '';

	switch (passwordStrength) {
		case 0:
			color = 'error';
			break;
		case 1:
			color = 'warning';
			break;
		case 2:
			color = 'notice';
			break;
		case 3:
			color = 'success';
			break;
	}

	for (let i = 0; i < passwordStrength + 1; i++) {
		passwordStrengthMeterBars[i].classList.add(`meter-bar-${color}`);
	}
}

function resetPasswordStrengthMeters() {
	passwordStrengthMeterBars.forEach((bar) => {
		bar.classList.remove('meter-bar-notice');
		bar.classList.remove('meter-bar-warning');
		bar.classList.remove('meter-bar-error');
		bar.classList.remove('meter-bar-success');
	});
}
