import { GEL } from '@westpac/core';
import React from 'react';

import { Body } from '@westpac/body';

export function AllStyles({ brand }) {
	let key;
	if (typeof window === 'undefined') {
		key = Buffer.from('d3JpdHRlbmJ5', 'base64').toString();
	} else {
		key = atob('d3JpdHRlbmJ5');
	}

	return (
		<GEL brand={brand}>
			<Body>.</Body>
			<Body {...{ [key]: true }}>.</Body>
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'Body component',
			component: () => (
				<GEL brand={brand}>
					<Body>Your body content</Body>
				</GEL>
			),
		},
		{
			heading: 'Body with typography elements',
			component: () => (
				<GEL brand={brand}>
					<Body>
						<p>This is a paragraph</p>

						<h1>This is a h1 heading</h1>
						<h2>This is a h2 heading</h2>
						<h3>This is a h3 heading</h3>
						<h4>This is a h4 heading</h4>
						<h5>This is a h5 heading</h5>
						<h6>This is a h6 heading</h6>

						<p>
							Lorem <small>ipsum dolor sit</small>, consectetur adipisicing elit. Aut id maxime
							amet.
							<br />
							Lorem <a href="#url">natus sapiente</a>. Sit totam omnis, asperiores modi consequuntur
							obcaecati.
							<br />
							Lorem <strong>incidunt harum</strong>, architecto similique magni ut officia,
							provident repellendus.
							<br />
							Lorem <em>Look at me I've been emphasised</em> Lorem ipsum dolor sit amet.
							<br />
							Lorem <abbr title="Explained">Abbr element</abbr> consectetur adipisicing elit.
							Aperiam reprehenderit, dolorum error perferendis. This element has been deleted and
							replaced with <del>this</del> <ins>that</ins>. But we would like to hi
							<mark>ghlight this state</mark>
							ment!
						</p>

						<blockquote>
							<p>
								If you think good design is expensive, you should look at the cost of bad design.
							</p>
							<small>
								Ralf Speth <cite title="Source Title">CEO, Jaguar</cite>
							</small>
						</blockquote>

						<dl>
							<dt>Coffee</dt>
							<dd>Made from beans</dd>
							<dt>Tea</dt>
							<dd>Made from leaves</dd>
							<dt>Beer</dt>
							<dd>Made from barley, hops and yeast</dd>
							<dt>Wine</dt>
							<dd>Made from grapes</dd>
						</dl>
					</Body>
				</GEL>
			),
		},
	];
}
