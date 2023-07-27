import { Icon, IconProps } from './Icon';

export const PlaneIcon = ({
	assistiveText = 'Plane',
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
				d="M7 24V22.5L10 20V14L0 17V15L10 8V2C10 0.89543 10.8954 0 12 0C13.1046 0 14 0.89543 14 2V8L24 15V17L14 14V20L17 22.5V24L12 22.5L7 24Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M7 24V22.5L10 20V14L0 17V15L10 8V2C10 0.89543 10.8954 0 12 0C13.1046 0 14 0.89543 14 2V8L24 15V17L14 14V20L17 22.5V24L12 22.5L7 24Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
