import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const TagIcon = ({
	assistiveText = 'Tag',
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
				d="M0 10.4853C0 11.0157 0.210714 11.5244 0.585787 11.8995L12.0208 23.3345C12.8019 24.1156 14.0682 24.1156 14.8492 23.3345L23.3345 14.8492C24.1156 14.0682 24.1156 12.8019 23.3345 12.0208L11.8995 0.585787C11.5244 0.210714 11.0157 0 10.4853 0H2C0.895431 0 0 0.895428 0 2V10.4853ZM6.33168 3.85705C7.01509 4.54046 7.01509 5.6485 6.33168 6.33192C5.64826 7.01534 4.54022 7.01534 3.8568 6.33192C3.17338 5.6485 3.17338 4.54046 3.8568 3.85705C4.54022 3.17363 5.64826 3.17363 6.33168 3.85705Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path
					d="M6.33156 6.33156C7.01498 5.64814 7.01498 4.5401 6.33156 3.85668C5.64814 3.17327 4.5401 3.17327 3.85668 3.85668C3.17327 4.5401 3.17327 5.64814 3.85668 6.33156C4.5401 7.01498 5.64814 7.01498 6.33156 6.33156Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0.585786 11.8995C0.210713 11.5244 2.10732e-08 11.0157 2.10734e-07 10.4853L0 2C1.68587e-07 0.895428 0.895431 -2.95028e-07 2 2.10734e-07L10.4853 0C11.0157 3.37175e-07 11.5244 0.210714 11.8995 0.585787L23.3345 12.0208C24.1156 12.8019 24.1156 14.0682 23.3345 14.8492L14.8492 23.3345C14.0682 24.1156 12.8019 24.1156 12.0208 23.3345L0.585786 11.8995ZM10.4853 2L21.9203 13.435L13.435 21.9203L2 10.4853L2 2L10.4853 2Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
