/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Body } from '@westpac/body';
import { PdfFileIcon, ArrowRightIcon } from '@westpac/icon';

const DummyText = ({ link = '' }) => (
	<p>
		Lorem ipsum dolor {link} sit amet consectetur, adipisicing elit. Libero facilis odit voluptate
		reprehenderit laborum numquam ex optio doloribus magni repudiandae vero fugiat iusto tempora
		debitis sunt laboriosam nobis, ut voluptatum?
	</p>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Body>
				<Link href="#">Look, I’m a default link</Link>
			</Body>

			<br />
			<hr />

			<h2>Standalone</h2>

			<h3>Default</h3>
			<Body>
				<DummyText />
				<Link href="#">Look, I’m a standalone link</Link>
			</Body>

			<h3>Icon before</h3>
			<Body>
				<DummyText />
				<Link href="#" type="standalone" iconBefore={PdfFileIcon}>
					Look, I’m a standalone link
				</Link>
			</Body>

			<h3>Icon after</h3>
			<Body>
				<DummyText />
				<Link href="#" type="standalone" iconAfter={ArrowRightIcon}>
					Look, I’m a standalone link
				</Link>
			</Body>

			<br />
			<hr />

			<h2>Inline</h2>

			<h3>Default</h3>
			<Body>
				<DummyText
					link={
						<Link href="#" type="inline">
							Look, I’m an inline link
						</Link>
					}
				/>
			</Body>

			<h3>Icon before</h3>
			<Body>
				<DummyText
					link={
						<Link href="#" iconBefore={PdfFileIcon} type="inline">
							Look, I’m an inline link
						</Link>
					}
				/>
			</Body>

			<h3>Icon after</h3>
			<Body>
				<DummyText
					link={
						<Link href="#" iconAfter={ArrowRightIcon} type="inline">
							Look, I’m an inline link
						</Link>
					}
				/>
			</Body>
		</GEL>
	);
}

export default Example;
