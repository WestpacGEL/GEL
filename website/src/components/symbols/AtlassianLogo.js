/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Svg } from './Svg';

export const AtlassianLogo = ({ width, height = 'auto', color, ...rest }) => {
	const { COLORS } = useBrand();

	color = color || COLORS.neutral;

	return (
		<Svg
			viewBox="0 0 159 20"
			width={159}
			height={20}
			assistiveText="Atlassian"
			css={{ width, height }}
			{...rest}
		>
			<title>Atlassian logo</title>
			<path
				d="M98.499 4.37l.384.166v3.626c-1.726-.768-3.55-1.32-5.397-1.32-1.532 0-2.358.384-2.358 1.296 0 .72.559 1.225 2.869 1.73 4.08.866 5.59 2.121 5.662 4.747l.002.2-.002.193c-.078 2.821-1.872 4.705-6.246 4.705-3.034 0-4.724-.642-5.994-1.245l-.157-.076v-3.794a13.297 13.297 0 006.2 1.657c1.798 0 2.334-.528 2.334-1.345 0-.84-.535-1.247-3.088-1.777-4.177-.797-5.319-2.578-5.371-4.83l-.002-.165.004-.206c.1-2.784 2.234-4.477 6.269-4.477 1.678-.03 3.343.282 4.89.916zm15.485 0l.384.166v3.626c-1.726-.768-3.55-1.32-5.397-1.32-1.532 0-2.358.384-2.358 1.296 0 .72.559 1.225 2.869 1.73 4.181.887 5.664 2.184 5.664 4.946 0 2.929-1.775 4.9-6.248 4.9-3.034 0-4.724-.643-5.994-1.246l-.157-.076v-3.794a13.297 13.297 0 006.2 1.657c1.798 0 2.334-.528 2.334-1.345 0-.84-.535-1.247-3.088-1.777-4.28-.816-5.373-2.666-5.373-4.995 0-2.906 2.14-4.683 6.272-4.683 1.679-.03 3.344.282 4.892.916zM5.562 8.94c.192-.02.381.06.498.211 2.512 2.65 3.379 7.091 1.948 10.011a.55.55 0 01-.51.311H.867a.57.57 0 01-.484-.266.556.556 0 01-.025-.548L5.12 9.252a.552.552 0 01.442-.312zM10.037.294c.206-.001.395.115.485.298.224.44 9.146 18.067 9.146 18.067a.556.556 0 01-.025.548.57.57 0 01-.484.266h-6.632a.57.57 0 01-.509-.31l-3.197-6.318A12.278 12.278 0 019.554.595a.538.538 0 01.483-.301zm113.121 3.401v15.778h-3.72V3.695h3.72zm-60.976 0v12.368h5.106l-1.204 3.41h-7.646V3.695h3.744zm-6.547 0v3.41H51.21v12.368h-3.744V7.105h-4.133v-3.41h12.302zm-17.731 0l5.568 15.778h-4.254l-.79-2.657a10.699 10.699 0 01-5.591.099l-.366-.1-.79 2.658h-4.254l5.57-15.778h4.907zm41.361 0l5.57 15.778H80.58l-.79-2.657a10.699 10.699 0 01-5.591.099l-.366-.1-.79 2.658H68.79l5.57-15.778h4.906zm57.298 0l5.57 15.778h-4.256l-.79-2.657a10.699 10.699 0 01-5.59.099l-.367-.1-.79 2.658h-4.254l5.57-15.778h4.907zm13.617 0l3.865 7.229 1.288 2.953.001-10.182h3.404v15.778h-4.28l-4.813-8.838-1.435-3.194v12.032h-3.403V3.695h5.373zm-114.73 3.1l-2.047 6.885a7.347 7.347 0 003.76.09l.335-.088-2.048-6.888zm41.362 0l-2.047 6.885a7.347 7.347 0 003.76.09l.334-.088-2.047-6.888zm57.296 0l-2.047 6.885a7.347 7.347 0 003.76.09l.334-.088-2.047-6.888z"
				fill={color}
				fillRule="evenodd"
				opacity={0.7}
			/>
		</Svg>
	);
};
