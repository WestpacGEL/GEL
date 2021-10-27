/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Link } from '@westpac/link';
import { Body } from '@westpac/body';
import { PdfFileIcon } from '@westpac/icon';

const ExampleText = ({ link = '' }) => (
	<p>
		Lorem ipsum dolor {link} sit amet consectetur, adipisicing elit. Libero facilis odit voluptate
		reprehenderit laborum numquam ex optio doloribus magni repudiandae vero fugiat iusto tempora
		debitis sunt laboriosam nobis, ut voluptatum?
	</p>
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Extra small</h2>
			<Body>
				<ExampleText
					link={
						<Link href="#" type="inline" iconBefore={PdfFileIcon} iconSize="xsmall">
							Look, I’m an inline link
						</Link>
					}
				/>
				<Link href="#" type="standalone" iconBefore={PdfFileIcon} iconSize="xsmall">
					Look, I’m a standalone link
				</Link>
			</Body>

			<br />
			<hr />

			<h2>Small</h2>
			<Body>
				<ExampleText
					link={
						<Link href="#" type="inline" iconBefore={PdfFileIcon} iconSize="small">
							Look, I’m an inline link
						</Link>
					}
				/>
				<Link href="#" type="standalone" iconBefore={PdfFileIcon} iconSize="small">
					Look, I’m a standalone link
				</Link>
			</Body>

			<br />
			<hr />

			<h2>Medium</h2>
			<Body>
				<ExampleText
					link={
						<Link href="#" type="inline" iconBefore={PdfFileIcon} iconSize="medium">
							Look, I’m an inline link
						</Link>
					}
				/>
				<Link href="#" type="standalone" iconBefore={PdfFileIcon} iconSize="medium">
					Look, I’m a standalone link
				</Link>
			</Body>

			<br />
			<hr />

			<h2>Large</h2>
			<Body>
				<ExampleText
					link={
						<Link href="#" type="inline" iconBefore={PdfFileIcon} iconSize="large">
							Look, I’m an inline link
						</Link>
					}
				/>
				<Link href="#" type="standalone" iconBefore={PdfFileIcon} iconSize="large">
					Look, I’m a standalone link
				</Link>
			</Body>

			<br />
			<hr />

			<h2>Extra large</h2>
			<Body>
				<ExampleText
					link={
						<Link href="#" type="inline" iconBefore={PdfFileIcon} iconSize="xlarge">
							Look, I’m an inline link
						</Link>
					}
				/>
				<Link href="#" type="standalone" iconBefore={PdfFileIcon} iconSize="xlarge">
					Look, I’m a standalone link
				</Link>
			</Body>
		</GEL>
	);
}

export default Example;
