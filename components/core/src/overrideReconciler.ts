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
	TDefaultOverrides extends { [key: string]: any; styles: any; attributes: any },
	TTokenOverrides extends { [key: string]: any; styles: any; attributes: any },
	TBrandOverrides extends { [key: string]: any; styles: any; attributes: any },
	TComponentOverrides extends { [key: string]: any; styles: any; attributes: any }
>(
	defaultOverrides: TDefaultOverrides = {} as TDefaultOverrides,
	tokenOverrides: TTokenOverrides = {} as TTokenOverrides,
	brandOverrides: TBrandOverrides = {} as TBrandOverrides,
	componentOverrides: TComponentOverrides = {} as TComponentOverrides
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
		let defaultOverride: TDefaultOverrides =
			(defaultOverrides[key] as TDefaultOverrides) || ({} as TDefaultOverrides);
		if (typeof defaultOverride.styles !== 'function') {
			defaultOverride.styles = (styles: any) => styles;
		}
		if (typeof defaultOverride.attributes !== 'function') {
			defaultOverride.attributes = (attributes: any) => attributes;
		}

		let tokenOverride: TTokenOverrides =
			(tokenOverrides[key] as TTokenOverrides) || ({} as TTokenOverrides);
		if (typeof tokenOverride.styles !== 'function') {
			tokenOverride.styles = (styles: any) => styles;
		}
		if (typeof tokenOverride.attributes !== 'function') {
			tokenOverride.attributes = (attributes: any) => attributes;
		}

		let brandOverride: TBrandOverrides =
			(brandOverrides[key] as TBrandOverrides) || ({} as TBrandOverrides);
		if (typeof brandOverride.styles !== 'function') {
			brandOverride.styles = (styles: any) => styles;
		}
		if (typeof brandOverride.attributes !== 'function') {
			brandOverride.attributes = (attributes: any) => attributes;
		}

		let componentOverride: TComponentOverrides =
			(componentOverrides[key] as TComponentOverrides) || ({} as TComponentOverrides);
		if (typeof componentOverride.styles !== 'function') {
			componentOverride.styles = (styles: any) => styles;
		}
		if (typeof componentOverride.attributes !== 'function') {
			componentOverride.attributes = (attributes: any) => attributes;
		}

		overrides[key].styles = (state: unknown) =>
			componentOverride.styles(
				brandOverride.styles(
					tokenOverride.styles(defaultOverride.styles(null, state), state),
					state
				),
				state
			);

		overrides[key].attributes = (state: unknown) =>
			componentOverride.attributes(
				brandOverride.attributes(
					tokenOverride.attributes(defaultOverride.attributes(null, state), state),
					state
				),
				state
			);
	}

	return overrides;
}
