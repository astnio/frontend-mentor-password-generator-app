import { initSliderProgressUpdater } from './sliderProgressUpdater.js';

const charLengthSlider = document.getElementById('password-length-range');
const charLengthLabel = document.getElementById('character-length-label');

charLengthSlider.addEventListener('input', () => {
	charLengthLabel.innerText = charLengthSlider.value;
});

initSliderProgressUpdater();
