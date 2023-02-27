import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

function Example({ brand }) {
	const content = ['Page One', 'Page Two', 'Page Three'];
	const [current, setCurrent] = useState(0);
	const [current2, setCurrent2] = useState(0);

	return (
		<GEL brand={brand}>
			<h2>Declarative</h2>
			<Pagination>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<Pagination current={1}>
				<Page text="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<h2>Infinite</h2>
			<Pagination infinite>
				<Page text="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination>

			<Pagination infinite current={1}>
				<Page text="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page text="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination>

			<h2>Customise back and next buttons</h2>
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

			<h2>Event bubble</h2>
			<Pagination
				infinite
				current={1}
				back={{
					onClick: () => console.log('this event will run in addition to the normal logic'),
				}}
				next={{
					onClick: (event) => {
						event.preventDefault();
						console.log('this event will only run without any logic disabling the default');
					},
				}}
			>
				<Page text="1" onClick={() => console.log('this page will run the normal code')} />
				<Page text="2" onClick={() => console.log('this page will run the normal code')} />
				<Page
					text="3"
					onClick={(event) => {
						event.preventDefault();
						console.log('this page will only run our code');
					}}
				/>
			</Pagination>

			<h2>Declarative as router</h2>
			<p>{content[current]}</p>
			<Pagination
				current={current}
				back={{
					onClick: (event, index) => {
						event.preventDefault();
						setCurrent(index);
					},
				}}
				next={{
					onClick: (event, index) => {
						event.preventDefault();
						setCurrent(index);
					},
				}}
			>
				<Page
					onClick={(event, index) => {
						event.preventDefault();
						setCurrent(index);
					}}
					text="1"
				/>
				<Page
					onClick={(event, index) => {
						event.preventDefault();
						setCurrent(index);
					}}
					text="2"
				/>
				<Page
					onClick={(event, index) => {
						event.preventDefault();
						setCurrent(index);
					}}
					text="3"
				/>
			</Pagination>

			<br />
			<hr />
			<br />

			<h2>Data Driven</h2>
			<Pagination
				data={[
					{ text: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<Pagination
				current={1}
				data={[
					{ text: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<Pagination
				current={2}
				infinite
				back={{
					visible: true,
				}}
				data={[
					{ text: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ text: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<h2>Data Driven as router</h2>
			<p>{content[current2]}</p>
			<Pagination
				current={current2}
				infinite
				back={{
					onClick: (event, page) => console.log(`Go to page ${page + 1}`, event),
				}}
				next={{
					onClick: (event, page) => console.log(`Go to page ${page + 1}`, event),
				}}
				data={[
					{
						onClick: (_, index) => {
							setCurrent2(index);
						},
						text: '1',
					},
					{
						onClick: (_, index) => {
							setCurrent2(index);
						},
						text: '2',
					},
					{
						onClick: (_, index) => {
							setCurrent2(index);
						},
						text: '3',
					},
				]}
			/>
		</GEL>
	);
}

export default Example;
