/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { SkipLink } from '@westpac/a11y';
import { Body } from '@westpac/body';

function Example({ brand }) {
	const { SPACING } = useBrand();

	return (
		<GEL brand={brand}>
			<Body>
				<h2>Screen reader skip link</h2>
				<p>Note: The example link below is visibility hidden until focussed.</p>
				<SkipLink href="#content">This is screen reader only text (visible when focussed)</SkipLink>
				<p>
					<a href="#0">Links in this section</a> are skipped over
				</p>
				<p>
					<a href="#0">Links in this section</a> are skipped over
				</p>
				<p>
					<a href="#0">Links in this section</a> are skipped over
				</p>
				<p>
					<a href="#0">Links in this section</a> are skipped over
				</p>
				<div
					id="content"
					css={{
						marginTop: SPACING(80),
					}}
					tabIndex="-1"
				>
					<p>
						This is example content, linked to by the SkipLink component above. Sit sint irure do
						eu. Non aliquip voluptate et nisi est voluptate in aliquip. Tempor ea est et velit anim
						incididunt qui ipsum anim id. Irure exercitation adipisicing velit minim ea aute esse
						elit amet minim in minim cillum. <a href="#0">Cupidatat aliqua</a> eiusmod ipsum
						occaecat proident exercitation.
					</p>
					<p>
						Velit irure et ullamco aute do consectetur non est veniam irure. Sunt nulla incididunt
						esse incididunt qui velit est laboris labore reprehenderit adipisicing voluptate magna
						ex. Velit esse minim nisi consectetur adipisicing amet et officia{' '}
						<a href="#0">occaecat qui</a>. Voluptate aliqua adipisicing Lorem fugiat ipsum id aliqua
						elit velit irure sint. Sit voluptate ex id ea dolor. Occaecat pariatur ullamco duis
						occaecat dolore veniam duis tempor.
					</p>
					<p>
						Irure voluptate enim ullamco sint nulla magna labore ullamco elit voluptate ex fugiat
						nostrud. Lorem et est culpa ut ullamco dolor eiusmod enim dolor labore. Sint duis et in
						velit anim eiusmod tempor velit anim proident. Velit eu culpa irure pariatur
						reprehenderit enim elit laborum commodo. Est fugiat occaecat ullamco deserunt nulla eu
						Lorem nulla est ex eu excepteur. Ullamco nisi Lorem laboris reprehenderit cupidatat
						reprehenderit incididunt in est.
					</p>
				</div>
			</Body>
		</GEL>
	);
}

export default Example;
