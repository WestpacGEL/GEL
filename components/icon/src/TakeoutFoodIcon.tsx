import { Icon, IconProps } from './Icon';

export const TakeoutFoodIcon = ({
	assistiveText = 'TakeoutFood',
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
				d="M16 2H8L3 7L3.15322 8.14916L1.41421 6.41016L0 7.82437L3.58835 11.4127L4.99996 22H19L20.4116 11.4127L24 7.82437L22.5858 6.41016L20.8468 8.14917L21 7L16 2ZM5.41771 10.0001H18.5823L18.8869 7.71535L15.1716 4H8.82843L5.11308 7.71535L5.41771 10.0001Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 2H16L21 7L20.8468 8.14917L22.5858 6.41016L24 7.82437L20.4116 11.4127L19 22H4.99996L3.58835 11.4127L0 7.82437L1.41421 6.41016L3.15322 8.14916L3 7L8 2ZM5.68437 12.0001L6.751 20H17.2489L18.3156 12.0001H5.68437ZM18.5823 10.0001H5.41771L5.11308 7.71535L8.82843 4H15.1716L18.8869 7.71535L18.5823 10.0001Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
