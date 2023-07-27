import { Icon, IconProps } from './Icon';

export const CocktailGlassIcon = ({
	assistiveText = 'CocktailGlass',
	copyrightYear = '2023',
	size = 'medium',
	look = 'filled',
	color,
	overrides,
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="TestIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		look={look}
		color={color}
		overrides={overrides}
		{...props}
	>
		{look === 'filled' ? (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1 2L11 15.1818V22H6V24H18V22H13V15.1818L23 2H1ZM7.30349 7H16.6965L18.9724 4H5.02762L7.30349 7Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M1 2L11 15.1818V22H6V24H18V22H13V15.1818L23 2H1ZM8.82073 9L12 13.1909L15.1793 9H8.82073ZM7.30349 7H16.6965L18.9724 4H5.02762L7.30349 7Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
