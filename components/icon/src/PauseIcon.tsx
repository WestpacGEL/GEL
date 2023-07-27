import { Icon, IconProps } from './Icon';

export const PauseIcon = ({
	assistiveText = 'Pause',
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
				d="M10 19H6V5H10V19ZM14 19V5H18V19H14Z"
				fill="currentColor"
			/>
		) : (
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10 19H6V5H10V19ZM14 19V5H18V19H14Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
