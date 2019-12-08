/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Pagination, Page } from '@westpac/pagination';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	const content = ['Page One', 'Page Two', 'Page Three'];
	const [current, setCurrent] = useState(0);
	const [current2, setCurrent2] = useState(0);

	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Declarative</h2>
			<Pagination>
				<Page label="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<Pagination current={1}>
				<Page label="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<h2>Infinite</h2>
			<Pagination infinite>
				<Page label="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination>

			<Pagination infinite current={1}>
				<Page label="1" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Infinite page ${page}`, event)} />
			</Pagination>

			<h2>Customise back and next buttons</h2>
			<Pagination
				back={{
					visible: true,
					label: 'Go Back',
					ariaLabel: page => `Go to previous page which is ${page}`,
					onClick: (event, page) => console.log(`Go to ${page}`, event),
				}}
				next={{
					visible: true,
					label: 'Go forth',
					ariaLabel: page => `Go to next page which is ${page}`,
					onClick: (event, page) => console.log(`Go to ${page}`, event),
				}}>
				<Page label="1" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="2" onClick={(event, page) => console.log(`Page ${page}`, event)} />
				<Page label="3" onClick={(event, page) => console.log(`Page ${page}`, event)} />
			</Pagination>

			<h2>Event bubble</h2>
			<Pagination
				current={1}
				back={{
					onClick: () => console.log('this event will run in addition to the onClick of the page'),
				}}
				next={{
					onClick: event => {
						event.preventDefault();
						console.log('this event will only run without the onClick of the page')
					},
				}}>
				<Page label="1" onClick={() => console.log('this page will run the normal code')} />
				<Page label="2" onClick={() => console.log('this page will run the normal code')} />
				<Page label="3" onClick={event => {
					event.preventDefault();
					console.log('this page will only run our code')}
				} />
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
					label="1"
				/>
				<Page
					onClick={(event, index) => {
						event.preventDefault();
						setCurrent(index);
					}}
					label="2"
				/>
				<Page
					onClick={(event, index) => {
						event.preventDefault();
						setCurrent(index);
					}}
					label="3"
				/>
			</Pagination>

			<br />
			<hr />
			<br />

			<h2>Data Driven</h2>
			<Pagination
				data={[
					{ label: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ label: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ label: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<Pagination
				current={1}
				data={[
					{ label: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ label: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ label: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<Pagination
				current={2}
				back={{
					visible: true,
					label: 'Back',
					ariaLabel: page => `Go to previous page which is ${page}`,
				}}
				next={{
					visible: true,
					label: 'Next',
					ariaLabel: page => `Go to next page which is ${page}`,
				}}
				data={[
					{ label: '1', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ label: '2', onClick: (event, page) => console.log(`Page ${page}`, event) },
					{ label: '3', onClick: (event, page) => console.log(`Page ${page}`, event) },
				]}
			/>

			<h2>Data Driven as router</h2>
			<p>{content[current2]}</p>
			<Pagination
				current={current2}
				back={{
					onClick: (event, page) => console.log(`Go to page ${page + 1}`,event),
				}}
				next={{
					onClick: (event, page) => console.log(`Go to page ${page + 1}`,event),
				}}
				data={[
					{
						onClick: (_, index) => {
							setCurrent2(index);
						},
						label: '1',
					},
					{
						onClick: (_, index) => {
							setCurrent2(index);
						},
						label: '2',
					},
					{
						onClick: (_, index) => {
							setCurrent2(index);
						},
						label: '3',
					},
				]}
			/>
		</GEL>
	);
}

export default Example;
