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

let strengthScore = 0;

function checkLength(passwordLength) {
	if (passwordLength <= 4) {
		strengthScore += 0;
	} else if (passwordLength <= 8) {
		strengthScore += 1;
	} else if (passwordLength <= 16) {
		strengthScore += 2;
	} else {
		strengthScore += 3;
	}
}

function checkCharDiversity(password) {
	if (/[a-z]/.test(password)) {
		strengthScore += 1;
	}

	if (/[A-Z]/.test(password)) {
		strengthScore += 1;
	}

	if (/[0-9]/.test(password)) {
		strengthScore += 1;
	}

	if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
		strengthScore += 1;
	}
}

function getFinalPasswordStrengthScore(password, passwordLength) {
	checkLength(passwordLength);

	checkCharDiversity(password);

	if (strengthScore <= 2) {
		return 0;
	} else if (strengthScore <= 4) {
		return 1;
	} else if (strengthScore <= 6) {
		return 2;
	} else {
		return 3;
	}
}

export function evaluatePassword(password, passwordLength) {
	strengthScore = 0;

	const finalScore = getFinalPasswordStrengthScore(password, passwordLength);

	passwordStrengthLabel.textContent = getPasswordStrengthValue(finalScore);

	setPasswordStrengthMeter(finalScore);
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
