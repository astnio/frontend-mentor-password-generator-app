const slider = document.getElementById('password-length-range');
const sliderProgress = document.querySelector('.slider-progress');

const updateSliderProgress = () => {
	const rangeValue = slider.value;
	const rangeMax = slider.max;
	const valuePercent = (rangeValue / rangeMax) * 100;

	sliderProgress.style.width = `${valuePercent}%`;
};

export const initSliderEventListner = () => {
	slider.addEventListener('input', updateSliderProgress);
	updateSliderProgress();
};
