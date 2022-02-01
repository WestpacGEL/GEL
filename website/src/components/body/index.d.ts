import { ReactElement, ReactNode } from 'react';

declare const Body: (props: {
	children: ReactNode;
	className?: string;
	[key: string]: unknown;
}) => ReactElement;

declare const getTypeScaleMargin: any;
