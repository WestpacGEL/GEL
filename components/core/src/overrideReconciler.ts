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
export function overrideReconciler<
	TdefaultOverrides extends { [key: string]: any },
	TtokenOverrides extends { [key: string]: any },
	TbrandOverrides extends { [key: string]: any },
	TcomponentOverrides extends { [key: string]: any }
>(
	defaultOverrides: TdefaultOverrides,
	tokenOverrides: TtokenOverrides,
	brandOverrides: TbrandOverrides,
	componentOverrides: TcomponentOverrides
) {
	const overrides = mergeWith(
		{} as any,
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		(_: unknown, item: unknown) => (isValidElementType(item) ? item : undefined)
	);

	for (let [key] of Object.entries(overrides)) {
		let defaultOverride = defaultOverrides[key] as TdefaultOverrides;
		if (typeof defaultOverride.styles !== 'function') {
			defaultOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof defaultOverride.attributes !== 'function') {
			defaultOverrides[key].attributes = (a: unknown) => a;
		}

		let tokenOverride = tokenOverrides[key] as TtokenOverrides;
		if (typeof tokenOverride.styles !== 'function') {
			tokenOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof tokenOverride.attributes !== 'function') {
			tokenOverrides[key].attributes = (a: unknown) => a;
		}

		let brandOverride = brandOverrides[key] as TbrandOverrides;
		if (typeof brandOverride.styles !== 'function') {
			brandOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof brandOverride.attributes !== 'function') {
			brandOverrides[key].attributes = (a: unknown) => a;
		}

		let componentOverride = componentOverrides[key] as TcomponentOverrides;
		if (typeof componentOverride.styles !== 'function') {
			componentOverrides[key].styles = (s: unknown) => s;
		}
		if (typeof componentOverride.attributes !== 'function') {
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
