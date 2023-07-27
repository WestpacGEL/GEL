import { Icon, IconProps } from './Icon';

export const ArrowLeftIcon = ({
	assistiveText = 'ArrowLeft',
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
				d="M9.82435 12L16.4121 18.5878L15 20L7 12L15 4L16.4122 5.41218L9.82435 12Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M9.82435 12L16.4121 18.5878L15 20L7 12L15 4L16.4122 5.41218L9.82435 12Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
