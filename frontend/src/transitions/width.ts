import { expoInOut } from 'svelte/easing';

export function width(el: Element, { delay = 0, duration = 350, easing = expoInOut }) {
	const style = getComputedStyle(el);
	const opacity = +style.opacity;
	const width = parseFloat(style.width);
	const max_width = parseFloat(style.maxWidth);
	const padding_left = parseFloat(style.paddingLeft);
	const padding_right = parseFloat(style.paddingRight);
	const margin_left = parseFloat(style.marginLeft);
	const margin_right = parseFloat(style.marginRight);
	const border_left_width = parseFloat(style.borderLeftWidth);
	const border_right_width = parseFloat(style.borderRightWidth);
	const transition = style.transition;

	// const filteredTransition = transition.split(',').filter(tx => !tx.includes('margin'))

	return {
		delay,
		duration,
		easing,
		css: (t) =>
			'overflow: hidden;' +
			`opacity: ${Math.min(t * 2, 1) * opacity};` +
			`width: ${t * width}px;` +
			`max-width: ${t * width}px;` +
			`padding-left: ${t * padding_left}px;` +
			`padding-right: ${t * padding_right}px;` +
			`margin-left: ${t * margin_left}px;` +
			`margin-right: ${t * margin_right}px;` +
			`border-left-width: ${t * border_left_width}px;` +
			`border-right-width: ${t * border_right_width}px;`
	};
}
