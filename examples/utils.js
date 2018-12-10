export function createRange(start, end, step = 1) {
	if (end === undefined) {
		end = start;
		start = 0;
	}

	let index = -1;
	let length = Math.max(Math.ceil((end - start) / step), 0);
	let result = Array(length);

	while (length--) {
		result[++index] = start;
		start += step;
	}

	return result;
}

export function slugify(string) {
	return string
		.split('')
		.reduce((result, ch) => result + ch.replace(/[^\w\s$*_+~.()'"!\-:@]/g, ''), '')
		.trim()
		.replace(/[-\s]+/g, '-')
		.toLowerCase();
}
