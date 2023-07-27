import { Icon, IconProps } from './Icon';

export const SwitchIcon = ({
	assistiveText = 'Switch',
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
				d="M2 5.985L8 0L14 5.985H10V14H6V5.985H2ZM14 18.015V10H18V18.015H22L16 24L10 18.015H14Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 5.985L8 0L14 5.985H10V14H6V5.985H2ZM14 18.015V10H18V18.015H22L16 24L10 18.015H14Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
