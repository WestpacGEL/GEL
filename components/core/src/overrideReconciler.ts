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
	TdefaultOverrides extends { [key: string]: any; styles: any; attributes: any },
	TtokenOverrides extends { [key: string]: any; styles: any; attributes: any },
	TbrandOverrides extends { [key: string]: any; styles: any; attributes: any },
	TcomponentOverrides extends { [key: string]: any; styles: any; attributes: any }
>(
	defaultOverrides: TdefaultOverrides = {} as TdefaultOverrides,
	tokenOverrides: TtokenOverrides = {} as TtokenOverrides,
	brandOverrides: TbrandOverrides = {} as TbrandOverrides,
	componentOverrides: TcomponentOverrides = {} as TcomponentOverrides
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
		let defaultOverride: TdefaultOverrides =
			(defaultOverrides[key] as TdefaultOverrides) || ({} as TdefaultOverrides);
		if (typeof defaultOverride.styles !== 'function') {
			defaultOverride.styles = (styles: any) => styles;
		}
		if (typeof defaultOverride.attributes !== 'function') {
			defaultOverride.attributes = (attributes: any) => attributes;
		}

		let tokenOverride: TtokenOverrides =
			(tokenOverrides[key] as TtokenOverrides) || ({} as TtokenOverrides);
		if (typeof tokenOverride.styles !== 'function') {
			tokenOverride.styles = (styles: any) => styles;
		}
		if (typeof tokenOverride.attributes !== 'function') {
			tokenOverride.attributes = (attributes: any) => attributes;
		}

		let brandOverride: TbrandOverrides =
			(brandOverrides[key] as TbrandOverrides) || ({} as TbrandOverrides);
		if (typeof brandOverride.styles !== 'function') {
			brandOverride.styles = (styles: any) => styles;
		}
		if (typeof brandOverride.attributes !== 'function') {
			brandOverride.attributes = (attributes: any) => attributes;
		}

		let componentOverride: TcomponentOverrides =
			(componentOverrides[key] as TcomponentOverrides) || ({} as TcomponentOverrides);
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
