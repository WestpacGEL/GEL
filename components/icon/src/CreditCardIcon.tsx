import { Icon, IconProps } from './Icon';

export const CreditCardIcon = ({
	assistiveText = 'CreditCard',
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
				d="M22 2H2C0.89543 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2ZM23 8H1V12H23V8Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 2H22C23.1046 2 24 2.89543 24 4V20C24 21.1046 23.1046 22 22 22H2C0.89543 22 0 21.1046 0 20V4C0 2.89543 0.89543 2 2 2ZM2 12V20H22V12H2ZM22 8H2V4H22V8Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
