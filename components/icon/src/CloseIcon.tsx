import { Icon, IconProps } from './Icon';

export const CloseIcon = ({
	assistiveText = 'Close',
	copyrightYear = '2020',
	size = 'medium',
	...props
}: Omit<IconProps, 'icon'>) => (
	<Icon
		icon="CloseIcon"
		assistiveText={assistiveText}
		copyrightYear={copyrightYear}
		size={size}
		{...props}
	>
		<polygon
			fill="currentColor"
			fillRule="evenodd"
			points="5.414 4 12 10.586 18.586 4 20 5.414 13.414 12 20 18.586 18.586 20 12 13.414 5.414 20 4 18.586 10.586 12 4 5.414"
		/>
	</Icon>
);
