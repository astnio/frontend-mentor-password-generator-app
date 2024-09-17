import { getGeneratedPassword } from './passwordGenerator.js';
import { initSliderProgressUpdater } from './sliderProgressUpdater.js';

const charLengthSlider = document.getElementById('password-length-range');
const charLengthLabel = document.getElementById('character-length-label');

const btnGeneratePassword = document.getElementById('btn-generate-password');
const outputPasswordLabel = document.getElementById('generated-password');

btnGeneratePassword.addEventListener('click', (event) => {
	event.preventDefault();
	outputPasswordLabel.value = getGeneratedPassword();
});

charLengthSlider.addEventListener('input', () => {
	charLengthLabel.innerText = charLengthSlider.value;
});

initSliderProgressUpdater();
