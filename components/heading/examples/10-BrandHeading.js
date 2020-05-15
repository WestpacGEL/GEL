/** @jsx jsx */

import { GEL, jsx, useFonts } from '@westpac/core';
import { BrandHeading } from '@westpac/heading';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand} css={{ ...useFonts({ path: 'assets/' }) }}>
			<Intopia />

			<h2>
				Without <code>tag</code> prop
			</h2>
			<BrandHeading size={1}>Size: 1</BrandHeading>
			<BrandHeading size={2}>Size: 2</BrandHeading>
			<BrandHeading size={3}>Size: 3</BrandHeading>
			<BrandHeading size={4}>Size: 4</BrandHeading>
			<BrandHeading size={5}>Size: 5</BrandHeading>
			<BrandHeading size={6}>Size: 6</BrandHeading>
			<BrandHeading size={7}>Size: 7</BrandHeading>

			<hr />

			<h2>
				With <code>tag</code> prop
			</h2>
			<BrandHeading tag="h2" size={1}>
				Tag: h2 size: 1
			</BrandHeading>
			<BrandHeading tag="h1" size={2}>
				Tag: h1 size: 2
			</BrandHeading>
			<BrandHeading tag="h1" size={3}>
				Tag: h1 size: 3
			</BrandHeading>
			<BrandHeading tag="h1" size={4}>
				Tag: h1 size: 4
			</BrandHeading>
			<BrandHeading tag="h1" size={5}>
				Tag: h1 size: 5
			</BrandHeading>
			<BrandHeading tag="h1" size={6}>
				Tag: h1 size: 6
			</BrandHeading>
			<BrandHeading tag="h1" size={7}>
				Tag: h1 size: 7
			</BrandHeading>
			<hr />

			<h2>With text</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat iusto velit in rerum
				molestias cupiditate ea doloribus assumenda tenetur, neque, deserunt quis atque illo aperiam
				fuga, vel labore alias!
			</p>
			<BrandHeading size={1}>Size: 1</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto porro optio,
				cupiditate atque ipsum animi quo ullam, nemo soluta ut at fugiat pariatur facere, laboriosam
				exercitationem. Architecto odit, dolore.
			</p>
			<BrandHeading size={2}>Size: 2</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolorum, impedit sed
				blanditiis nobis quibusdam alias sequi enim unde, eos aliquam adipisci voluptates harum
				magni cupiditate iusto sit, itaque magnam.
			</p>
			<BrandHeading size={3}>Size: 3</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos, error nam amet
				adipisci optio perspiciatis exercitationem recusandae modi doloremque non odit fugiat, totam
				numquam provident magnam, vitae ipsa ullam.
			</p>
			<BrandHeading size={4}>Size: 4</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dignissimos libero
				cupiditate recusandae harum provident, facere asperiores, sit aspernatur repellat iste
				dolorum sunt tenetur modi accusantium eligendi debitis amet voluptate.
			</p>
			<BrandHeading size={5}>Size: 5</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo facilis molestias
				voluptate rerum optio quisquam quia laudantium deleniti, ducimus, cum aperiam explicabo eum
				exercitationem. Molestiae dolorem, sunt ut velit.
			</p>
			<BrandHeading size={6}>Size: 6</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis pariatur doloremque
				nostrum optio, voluptates officia quis quam magni laborum omnis molestias sit corrupti
				eligendi vero itaque expedita eveniet quia, alias.
			</p>
			<BrandHeading size={7}>Size: 7</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ratione libero cumque
				architecto quia, quaerat corporis. Maxime tenetur aliquam nemo provident autem modi, nam
				recusandae laboriosam. Repellat eligendi explicabo optio!
			</p>

			<hr />

			<h2>Invalid props</h2>
			<BrandHeading size={0}>Size too small</BrandHeading>
			<BrandHeading size={10}>Size too large</BrandHeading>
			<BrandHeading tag="span" size={5}>
				Tag not heading tag
			</BrandHeading>
		</GEL>
	);
}

export default Example;
