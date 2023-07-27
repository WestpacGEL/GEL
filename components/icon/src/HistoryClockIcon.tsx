import { Fragment } from 'react';
import { Icon, IconProps } from './Icon';

export const HistoryClockIcon = ({
	assistiveText = 'HistoryClock',
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
			<Fragment>
				<path
					d="M6.7779 20.0665L8.0583 18.53C9.53262 19.76 11.4299 20.5 13.5 20.5C18.1944 20.5 22 16.6944 22 12C22 7.30558 18.1944 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12H8L4 16.5L0 12H3C3 6.20101 7.70101 1.5 13.5 1.5C19.299 1.5 24 6.20101 24 12C24 17.799 19.299 22.5 13.5 22.5C10.9428 22.5 8.59911 21.5859 6.7779 20.0665Z"
					fill="currentColor"
				/>
				<path
					d="M14 6V12.8458L18.1962 15.2684L17.1962 17.0005L12 14.0005V6H14Z"
					fill="currentColor"
				/>
			</Fragment>
		) : (
			<Fragment>
				<path
					d="M6.7779 20.0665L8.0583 18.53C9.53262 19.76 11.4299 20.5 13.5 20.5C18.1944 20.5 22 16.6944 22 12C22 7.30558 18.1944 3.5 13.5 3.5C8.80558 3.5 5 7.30558 5 12H8L4 16.5L0 12H3C3 6.20101 7.70101 1.5 13.5 1.5C19.299 1.5 24 6.20101 24 12C24 17.799 19.299 22.5 13.5 22.5C10.9428 22.5 8.59911 21.5859 6.7779 20.0665Z"
					fill="currentColor"
				/>
				<path
					d="M14 6V12.8458L18.1962 15.2684L17.1962 17.0005L12 14.0005V6H14Z"
					fill="currentColor"
				/>
			</Fragment>
		)}
	</Icon>
);
