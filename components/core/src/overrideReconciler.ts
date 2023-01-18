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
	defaultOverrides: Record<string, any> = {},
	tokenOverrides: Record<string, any> = {},
	brandOverrides: Record<string, any> = {},
	componentOverrides: Record<string, any> = {}
) {
	const overrides = mergeWith(
		{},
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		(_: unknown, item: unknown) => (isValidElementType(item) ? item : undefined)
	);

	for (let [key] of Object.entries(overrides)) {
		defaultOverrides[key] = defaultOverrides[key] || {};
		if (typeof defaultOverrides[key].styles !== 'function') {
			defaultOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof defaultOverrides[key].attributes !== 'function') {
			defaultOverrides[key].attributes = (a: unknown) => a;
		}

		tokenOverrides[key] = tokenOverrides[key] || {};
		if (typeof tokenOverrides[key].styles !== 'function') {
			tokenOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof tokenOverrides[key].attributes !== 'function') {
			tokenOverrides[key].attributes = (a: unknown) => a;
		}

		brandOverrides[key] = brandOverrides[key] || {};
		if (typeof brandOverrides[key].styles !== 'function') {
			brandOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof brandOverrides[key].attributes !== 'function') {
			brandOverrides[key].attributes = (a: unknown) => a;
		}

		componentOverrides[key] = componentOverrides[key] || {};
		if (typeof componentOverrides[key].styles !== 'function') {
			componentOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof componentOverrides[key].attributes !== 'function') {
			componentOverrides[key].attributes = (a: unknown) => a;
		}

		overrides[key].styles = (state: unknown) =>
			componentOverrides[key].styles(
				brandOverrides[key].styles(
					tokenOverrides[key].styles(defaultOverrides[key].styles(null, state), state),
					state
				),
				state
			);

		overrides[key].attributes = (state: unknown) =>
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
