import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

export const Heading = ({ level, children, ...props }) => {
	const mq = useMediaQuery();
	const { TYPE } = useBrand();
	const spacingMap = {
		h2: ['1.5rem', '1.875rem'],
		h3: '1.125rem',
		h4: '1.125rem',
	};

	const fontSizeMap = {
		h2: ['1.5rem', '1.875rem'],
		h3: ['1.125rem', '1.5rem'],
		h4: '1.125rem',
	};

	const Level = level;

	return (
		<Cell width={[12, 10, null, 8]} left={[1, 2, null, 3]}>
			<Level
				css={mq({
					fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
					fontSize: fontSizeMap[level],
					marginTop: 0,
					marginBottom: spacingMap[level],
				})}
				{...props}
			>
				{children}
			</Level>
		</Cell>
	);
};
