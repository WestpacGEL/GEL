import { merge } from './merge';

/**
 * Reconcile all overrides into one
 *
 * @param  {object} defaultOverrides   - The default overrides for the component
 * @param  {object} tokenOverrides     - The overrides coming from the tokens package
 * @param  {object} brandOverrides     - The overrides coming from the `brand` prop on the `<GEL/>` wrapper
 * @param  {object} componentOverrides - The overrides from the component `override` prop
 * @param  {object} state              - An object of all props and state
 *
 * @return {object}                    - All overrides computed with styles executed in order
 */
export function overrideReconciler(
	defaultOverrides,
	tokenOverrides,
	brandOverrides,
	componentOverrides,
	state
) {
	const overrides = merge(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	if (typeof overrides.styles === 'function') {
		overrides.styles = defaultOverrides.styles(null, state);
		if (tokenOverrides && typeof tokenOverrides.styles === 'function') {
			overrides.styles = tokenOverrides.styles(overrides.styles, state);
		}
		if (brandOverrides && typeof brandOverrides.styles === 'function') {
			overrides.styles = brandOverrides.styles(overrides.styles, state);
		}
		if (componentOverrides && typeof componentOverrides.styles === 'function') {
			overrides.styles = componentOverrides.styles(overrides.styles, state);
		}
	}

	if (overrides.subComponent) {
		for (let [key] of Object.entries(overrides.subComponent)) {
			if (defaultOverrides.subComponent[key]) {
				overrides.subComponent[key].styles = defaultOverrides.subComponent[key].styles(null, state);
				if (
					tokenOverrides &&
					tokenOverrides.subComponent &&
					tokenOverrides.subComponent[key] &&
					typeof tokenOverrides.subComponent[key].styles === 'function'
				) {
					overrides.subComponent[key].styles = tokenOverrides.subComponent[key].styles(
						overrides.subComponent[key].styles,
						state
					);
				}
				if (
					brandOverrides &&
					brandOverrides.subComponent &&
					brandOverrides.subComponent[key] &&
					typeof brandOverrides.subComponent[key].styles === 'function'
				) {
					overrides.subComponent[key].styles = brandOverrides.subComponent[key].styles(
						overrides.subComponent[key].styles,
						state
					);
				}
				if (
					componentOverrides &&
					componentOverrides.subComponent &&
					componentOverrides.subComponent[key] &&
					typeof componentOverrides.subComponent[key].styles === 'function'
				) {
					overrides.subComponent[key].styles = componentOverrides.subComponent[key].styles(
						overrides[key].styles,
						state
					);
				}
			}
		}
	}

	return overrides;
}
