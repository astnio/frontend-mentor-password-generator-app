const btnCopyLabel = document.getElementById('btn-copied-label');

let animationTimeout = null;
let isAnimating = false;

function resetAnimation() {
	btnCopyLabel.style.animation = 'none';
	btnCopyLabel.offsetHeight;
	btnCopyLabel.style.animation = null;
	btnCopyLabel.style.animationPlayState = 'paused';
	isAnimating = false;
}

export function startAnimation() {
	if (isAnimating) {
		clearTimeout(animationTimeout);
		resetAnimation();
	}

	isAnimating = true;
	btnCopyLabel.style.animationPlayState = 'running';

	animationTimeout = setTimeout(() => {
		resetAnimation();
	}, 2000);
}
