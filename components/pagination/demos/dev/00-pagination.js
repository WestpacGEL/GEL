import { jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Title>Declarative</Title>
			<Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<Title>Data Driven</Title>
			<Pagination
				data={[
					{ text: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<Title>Infinite</Title>
			<Pagination infinite>
				<Page text="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination>
		</Playground>
	);
};

export default Demo;
