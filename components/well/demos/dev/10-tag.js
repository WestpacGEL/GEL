import { jsx } from '@westpac/core';
import { Well } from '@westpac/well';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const WellTag = ({ children, ...rest }) => (
	<aside {...rest}>
		<span>{children}</span>
	</aside>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>{`Tag as <article>`}</Title>
			<Well tag="article">Look, I'm in a well.</Well>
			<Title>{`Tag as <aside> with child <span>, passed as a component`}</Title>
			<Well tag={WellTag}>Look, I'm in a well.</Well>
		</Playground>
	);
};

export default Demo;
