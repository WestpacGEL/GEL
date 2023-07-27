import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const WarningIcon = ({
	assistiveText = 'Warning',
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
				d="M12.7078 0.293176C12.3169 -0.0977248 11.6831 -0.0977256 11.2922 0.293175L0.293176 11.2922C-0.0977252 11.6831 -0.0977252 12.3169 0.293176 12.7078L11.2922 23.7068C11.6831 24.0977 12.3169 24.0977 12.7078 23.7068L23.7068 12.7078C24.0977 12.3169 24.0977 11.6831 23.7068 11.2922L12.7078 0.293176ZM10.9999 14H12.9999V6H10.9999V14ZM10.9999 18H12.9999V16H10.9999V18Z"
				fill="currentColor"
			/>
		) : (
			<Fragment>
				<path d="M11 14H13V6H11V14Z" fill="currentColor" />
				<path d="M11 18H13V16H11V18Z" fill="currentColor" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11.2922 0.293175C11.6831 -0.0977256 12.3169 -0.0977248 12.7078 0.293176L23.7068 11.2922C24.0977 11.6831 24.0977 12.3169 23.7068 12.7078L12.7078 23.7068C12.3169 24.0977 11.6831 24.0977 11.2922 23.7068L0.293176 12.7078C-0.0977252 12.3169 -0.0977252 11.6831 0.293176 11.2922L11.2922 0.293175ZM11.9995 2.41654L2.41602 12L11.9995 21.5835L21.5829 12L11.9995 2.41654Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
