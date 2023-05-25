import { Icon, IconProps } from './Icon';

export const ArrowRightIcon = ({
	assistiveText = 'Arrow Right',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="ArrowRightIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="14.588 12 8 18.588 9.412 20 17.412 12 9.412 4 8 5.412"
		/>
	</Icon>
);
