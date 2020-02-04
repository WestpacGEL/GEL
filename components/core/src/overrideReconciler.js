import { isValidElementType } from 'react-is';

import { mergeWith } from './mergeWith';

/**
 * Reconcile all overrides into one, cascade styles and attributes through
 *
 * @param  {object} defaultOverrides   - The default overrides for the component
 * @param  {object} tokenOverrides     - The overrides coming from the theme/brand packages mixed with tokens
 * @param  {object} brandOverrides     - The overrides coming from the `brand` prop on the `<GEL/>` wrapper
 * @param  {object} componentOverrides - The overrides from the component `override` prop (highest specificity)
 *
 * @return {object}                    - All overrides merged with a folded styles function
 */
export function overrideReconciler(
	defaultOverrides = {},
	tokenOverrides = {},
	brandOverrides = {},
	componentOverrides = {}
) {
	const overrides = mergeWith(
		{},
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		(_, item) => (isValidElementType(item) ? item : undefined)
	);

	for (let [key] of Object.entries(overrides)) {
		defaultOverrides[key] = defaultOverrides[key] || {};
		if (typeof defaultOverrides[key].styles !== 'function') {
			defaultOverrides[key].styles = s => s;
		}
		if (typeof defaultOverrides[key].attributes !== 'function') {
			defaultOverrides[key].attributes = a => a;
		}

		tokenOverrides[key] = tokenOverrides[key] || {};
		if (typeof tokenOverrides[key].styles !== 'function') {
			tokenOverrides[key].styles = s => s;
		}
		if (typeof tokenOverrides[key].attributes !== 'function') {
			tokenOverrides[key].attributes = a => a;
		}

		brandOverrides[key] = brandOverrides[key] || {};
		if (typeof brandOverrides[key].styles !== 'function') {
			brandOverrides[key].styles = s => s;
		}
		if (typeof brandOverrides[key].attributes !== 'function') {
			brandOverrides[key].attributes = a => a;
		}

		componentOverrides[key] = componentOverrides[key] || {};
		if (typeof componentOverrides[key].styles !== 'function') {
			componentOverrides[key].styles = s => s;
		}
		if (typeof componentOverrides[key].attributes !== 'function') {
			componentOverrides[key].attributes = a => a;
		}

		overrides[key].styles = state =>
			componentOverrides[key].styles(
				brandOverrides[key].styles(
					tokenOverrides[key].styles(defaultOverrides[key].styles(null, state), state),
					state
				),
				state
			);

		overrides[key].attributes = state =>
			componentOverrides[key].attributes(
				brandOverrides[key].attributes(
					tokenOverrides[key].attributes(defaultOverrides[key].attributes(null, state), state),
					state
				),
				state
			);
	}

	return overrides;
}
