import { Icon, IconProps } from './Icon';

export const CursorArrowIcon = ({
	assistiveText = 'CursorArrow',
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
				d="M6 18.8885V1L20.3228 11.7571L13.6146 11.7459L18.0717 20.6976L14.491 22.4805L10.0339 13.5287L6 18.8885Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M6 18.8885V1L20.3228 11.7571L13.6146 11.7459L18.0717 20.6976L14.491 22.4805L10.0339 13.5287L6 18.8885Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
