import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const ExcelFileIcon = ({
	assistiveText = 'ExcelFile',
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
				d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM16 2L20 6H16V2ZM14.2811 8L12 11.3053L9.71893 8H6.49555L10.3593 13.6828L6 20H12.2485V17.8535H10.8053L12 16.0955L14.6546 20H18L13.6414 13.6828L17.5044 8H14.2811Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M12 11.3053L14.2811 8H17.5044L13.6414 13.6828L18 20H14.6546L12 16.0955L10.8053 17.8535H12.2485V20H6L10.3593 13.6828L6.49555 8H9.71893L12 11.3053Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 2C2 0.89543 2.89543 0 4 0H16L22 6V22C22 23.1046 21.1046 24 20 24H4C2.89543 24 2 23.1046 2 22V2ZM4 2H16V6H20V22H4V2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
