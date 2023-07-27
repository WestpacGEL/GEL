import { Icon, IconProps } from './Icon';

export const HouseIcon = ({
	assistiveText = 'House',
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
				d="M24 12V11.0769L12 0L0 11.0769V12H2V24H22V12H24ZM15 22V15H9V22H15Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M24 12V11.0769L12 0L0 11.0769V12H2V24H22V12H24ZM20 22V10.1064L12 2.72182L4 10.1064V22H8V15H16V22H20ZM14 22V17H10V22H14Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
