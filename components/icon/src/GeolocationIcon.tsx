import { Icon, IconProps } from './Icon';

export const GeolocationIcon = ({
	assistiveText = 'Geolocation',
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
			<path d="M24 0L0 10.04V11.3467L9.12 14.88L12.64 24H13.9467L24 0Z" fill="currentColor" />
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.6673 13.3346L13.3425 20.2658L20.2698 3.7284L3.73081 10.6472L10.6673 13.3346ZM9.12 14.88L12.64 24H13.9467L24 0L0 10.04V11.3467L9.12 14.88Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
