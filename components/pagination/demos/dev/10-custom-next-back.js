import { jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Pagination
				back={{
					visible: true,
					text: 'Go back',
					onClick: (event, page) => console.log(`Go to ${page}`, event),
					assistiveText: (page) => `Go back to previous page which is ${page + 1}`,
				}}
				next={{
					visible: true,
					text: 'Go forth',
					onClick: (event, page) => console.log(`Go to ${page}`, event),
					assistiveText: (page) => `Go forth to next page which is ${page + 1}`,
				}}
			>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>
		</Playground>
	);
};

export default Demo;
