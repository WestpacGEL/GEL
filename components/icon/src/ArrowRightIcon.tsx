import { Icon, IconProps } from './Icon';

export const ArrowRightIcon = ({
	assistiveText = 'ArrowRight',
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
				d="M14.5879 12L8.00006 18.5878L9.41223 20L17.4122 12L9.41218 4L8 5.41218L14.5879 12Z"
				fill="currentColor"
			/>
		) : (
			<path
				d="M14.5879 12L8.00006 18.5878L9.41223 20L17.4122 12L9.41218 4L8 5.41218L14.5879 12Z"
				fill="currentColor"
			/>
		)}
	</Icon>
);
