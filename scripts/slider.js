const sliderContainer = document.querySelector('.slider-container');
const slider = document.getElementById('password-length-range');

const updateSliderProgress = () => {
	const progress =
		((slider.value - slider.min) / (slider.max - slider.min)) * 100;

	sliderContainer.style.setProperty('slider-value', `${progress}%`);
};

export const initSliderEventListner = () => {
	slider.addEventListener('input', updateSliderProgress);
	updateSliderProgress();
};
