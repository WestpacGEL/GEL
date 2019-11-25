/** @jsx jsx */

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
			<Pagination current={1}>
				<Page label="1" />
				<Page label="2" />
				<Page label="3" />
			</Pagination>

			<h2>Declarative as router</h2>
			<p> {content[current]}</p>
			<Pagination
				current={current}
				back={{
					onClick: () => {
						setCurrent(current - 1);
					},
				}}
				next={{
					onClick: e => {
						e.preventDefault();
						setCurrent(current + 1);
					},
				}}
			>
				<Page
					onClick={e => {
						e.preventDefault();
						setCurrent(0);
					}}
					label="1"
				/>
				<Page
					onClick={e => {
						e.preventDefault();
						setCurrent(1);
					}}
					label="2"
				/>
				<Page
					onClick={e => {
						e.preventDefault();
						setCurrent(2);
					}}
					label="3"
				/>
			</Pagination>
			<br />
			<hr />
			<br />
			<h2>Data Driven</h2>
			<Pagination
				current={2}
				back={{
					visible: true,
					label: 'Back',
					ariaLabel: 'Go to previous page',
				}}
				next={{
					visible: true,
					label: 'Next',
					ariaLabel: 'Go to the next page',
				}}
				data={{
					pages: [{ label: '1' }, { label: '2' }, { label: '3' }],
				}}
			/>

			<h2>Data Driven as router</h2>
			<p> {content[current2]}</p>
			<Pagination
				current={current2}
				back={{
					onClick: () => {
						setCurrent2(current2 - 1);
					},
				}}
				next={{
					onClick: e => {
						e.preventDefault();
						setCurrent2(current2 + 1);
					},
				}}
				data={{
					pages: [
						{
							onClick: () => {
								setCurrent2(0);
							},
							label: '1',
						},
						{
							onClick: () => {
								setCurrent2(1);
							},
							label: '2',
						},
						{
							onClick: () => {
								setCurrent2(2);
							},
							label: '3',
						},
					],
				}}
			/>
		</GEL>
	);
}

export default Example;
