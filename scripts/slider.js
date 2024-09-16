const slider = document.getElementById('password-length-range');
const sliderProgress = document.querySelector('.slider-progress');

const updateSliderProgress = () => {
	const sliderMin = parseFloat(slider.min);
	const sliderMax = parseFloat(slider.max);
	const sliderCurrentValue = parseFloat(slider.value);

	const sliderPercent =
		((sliderCurrentValue - sliderMin) / (sliderMax - sliderMin)) * 100;

	const sliderThumbPosition = (sliderPercent / 100) * (slider.offsetWidth - 28);

	sliderProgress.style.width = `${sliderThumbPosition + 28 / 2}px`;
};

export const initSliderEventListner = () => {
	slider.addEventListener('input', updateSliderProgress);
	window.addEventListener('resize', updateSliderProgress);
	updateSliderProgress();
};
