import { jsx } from '@westpac/core';
import { Container, Cell as WCell, Grid as WGrid } from '@westpac/grid';

export const Wrapper = ({ children, ...rest }) => (
	<div css={{ position: 'relative' }} {...rest}>
		<Gridly />
		<Container>
			<Grid>{children}</Grid>
		</Container>
	</div>
);

const Gridly = (props) => (
	<Container
		css={{
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			left: 0,
		}}
		{...props}
	>
		<WGrid css={{ height: '100%' }}>
			{[...new Array(12)].map((item, index) => (
				<Cell key={index} css={{ backgroundColor: 'rgba(0, 116, 196, 0.05);' }} />
			))}
		</WGrid>
	</Container>
);

const Grid = (props) => <WGrid css={{ padding: '6px 0' }} {...props} />;

export const Cell = ({ children, ...rest }) => (
	<WCell
		css={{ backgroundColor: 'rgba(197,59,0,0.15)', color: '#c53b00', textAlign: 'center' }}
		{...rest}
	>
		<p>{children}</p>
	</WCell>
);

export const ExampleWrapper = ({ children, ...rest }) => (
	<div css={{ position: 'relative' }} {...rest}>
		<Gridly />
		{children}
	</div>
);
