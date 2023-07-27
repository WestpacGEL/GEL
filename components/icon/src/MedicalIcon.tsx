import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const MedicalIcon = ({
	assistiveText = 'Medical',
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
				d="M2 0C0.895431 0 0 0.89543 0 2V22C0 23.1046 0.89543 24 2 24H22C23.1046 24 24 23.1046 24 22V2C24 0.895431 23.1046 0 22 0H2ZM10.5 5.5H13.5V10.5H18.5V13.5H13.5V18.5H10.5V13.5H5.5V10.5H10.5V5.5Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M10.5 5.5H13.5V10.5H18.5V13.5H13.5V18.5H10.5V13.5H5.5V10.5H10.5V5.5Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V22C24 23.1046 23.1046 24 22 24H2C0.89543 24 0 23.1046 0 22V2ZM2 2H22V22H2L2 2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
