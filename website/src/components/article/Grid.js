import { jsx, useMediaQuery } from '@westpac/core';
import { Grid as WBCGrid, Container as WBCContainer } from '@westpac/grid';
import merge from 'lodash.merge';

export const Grid = (props) => <WBCGrid columnGap={[12, 18, 24]} rowGap={[24]} {...props} />;

export const Container = (props) => {
	const mq = useMediaQuery();
	return (
		<WBCContainer
			overrides={{
				Container: {
					styles: (styles) =>
						merge({}, styles, {
							...mq({ paddingLeft: [24, 30, 36, 48, 60], paddingRight: [24, 30, 36, 48, 60] })[0],
						}),
				},
			}}
			{...props}
		/>
	);
};
