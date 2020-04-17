export function getLabel(name, props = {}) {
	let label = name;

	Object.entries(props)
		.sort(([a], [b]) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
		.map(([name, value]) => {
			if (typeof value === 'undefined') {
			} else if (typeof value === 'boolean') {
				label += value ? `-${cleanClassName(name)}` : '';
			} else if (typeof value === 'string') {
				label += value === '' ? '' : `-${cleanClassName(name)}_${cleanClassName(value)}`;
			} else if (typeof value === 'function') {
				label += `-${cleanClassName(value.displayName || value.name || name)}`;
			}
		});

	return label;
}

function cleanClassName(name) {
	return name
		.replace(/ /g, '_') // we transform spaces into underscores
		.replace(/\./g, '_') // we transform dots into underscores
		.replace(/[^a-z0-9A-Z_-]/g, '') // remove all other characters we don't know in css
		.replace(/^-*[0-9]+/g, ''); // remove numbers or underscores from beginning
}
