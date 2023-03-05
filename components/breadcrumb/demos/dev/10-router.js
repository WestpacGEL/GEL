import { jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const CrumbTag = (props) => <a {...props} onClick={() => console.log(`Clicked crumb link`)} />;

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Declarative</Title>
			<Breadcrumb assistiveText="Page transitions and the such">
				<Crumb text="Home" tag={CrumbTag} />
				<Crumb text="Personal" tag={CrumbTag} />
				<Crumb text="Credit cards" tag={CrumbTag} />
			</Breadcrumb>
			<Title>Data driven</Title>
			<Breadcrumb
				assistiveText="Page transitions and the such"
				data={[
					{ text: 'Home', tag: CrumbTag },
					{ text: 'Personal', tag: CrumbTag },
					{ text: 'Credit cards', tag: CrumbTag },
				]}
			/>
		</Playground>
	);
};

export default Demo;
