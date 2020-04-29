export function getLabel(name, props = {}) {
	let label = name;

	Object.entries(props)
		.sort(([a], [b]) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
		.map(([name, value]) => {
			if (typeof value === 'undefined') {
			} else if (typeof value === 'boolean') {
				label += value ? `-${name}` : '';
			} else if (typeof value === 'string') {
				label += value === '' ? '' : `-${name}_${value.replace(/-/g, '_')}`;
			} else if (typeof value === 'number') {
				label += `-${name}_${String(value).replace(/-/g, '_')}`;
			} else if (typeof value === 'function') {
				label += `-${value.displayName || value.name}`;
			} else {
				label += `-${name}_${JSON.stringify(value)
					.replace(/-/g, '_')
					.replace(/,/g, '_')
					.replace(/:/g, '_')}`;
			}
		});

	return cleanClassName(label);
}

export function cleanClassName(name) {
	return name
		.replace(/ /g, '_') // we transform spaces into underscores
		.replace(/\./g, '_') // we transform dots into underscores
		.replace(/[^a-z0-9A-Z_-]/g, '') // remove all other characters we don't know in css
		.replace(/^-*[0-9]+/g, ''); // remove numbers or underscores from beginning
}
