export function getLabel(name, props = {}) {
	let label = name;

	Object.entries(props)
		.sort(([a], [b]) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1))
		.map(([name, value]) => {
			switch (typeof value) {
				case 'undefined':
					break;
				case 'boolean':
					label += value ? `-${name}` : '';
					break;
				case 'string':
					label += value === '' ? '' : `-${name}_${value.replace(/-/g, '_')}`;
					break;
				case 'number':
					label += `-${name}_${String(value).replace(/-/g, '_')}`;
					break;
				case 'function':
					label += `-${value.displayName || value.name}`;
					break;
				default:
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
