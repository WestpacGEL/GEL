import { GEL, jsx, useFonts } from '@westpac/core';
import { BrandHeading } from '@westpac/heading';

function Example({ brand }) {
	return (
		<GEL brand={brand} css={{ ...useFonts({ path: 'assets/' }) }}>
			<h2>
				Without <code>tag</code> prop
			</h2>
			<BrandHeading size={1}>Heading size: 1</BrandHeading>
			<BrandHeading size={2}>Heading size: 2</BrandHeading>
			<BrandHeading size={3}>Heading size: 3</BrandHeading>
			<BrandHeading size={4}>Heading size: 4</BrandHeading>
			<BrandHeading size={5}>Heading size: 5</BrandHeading>
			<BrandHeading size={6}>Heading size: 6</BrandHeading>
			<BrandHeading size={7}>Heading size: 7</BrandHeading>

			<hr />

			<h2>
				With <code>tag</code> prop
			</h2>
			<BrandHeading tag="h2" size={1}>
				Heading tag: h2 size: 1
			</BrandHeading>
			<BrandHeading tag="h1" size={2}>
				Heading tag: h1 size: 2
			</BrandHeading>
			<BrandHeading tag="h1" size={3}>
				Heading tag: h1 size: 3
			</BrandHeading>
			<BrandHeading tag="h1" size={4}>
				Heading tag: h1 size: 4
			</BrandHeading>
			<BrandHeading tag="h1" size={5}>
				Heading tag: h1 size: 5
			</BrandHeading>
			<BrandHeading tag="h1" size={6}>
				Heading tag: h1 size: 6
			</BrandHeading>
			<BrandHeading tag="h1" size={7}>
				Heading tag: h1 size: 7
			</BrandHeading>
			<hr />

			<h2>With text</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, repellat iusto velit in rerum
				molestias cupiditate ea doloribus assumenda tenetur, neque, deserunt quis atque illo aperiam
				fuga, vel labore alias!
			</p>
			<BrandHeading size={1}>Heading size: 1</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto porro optio,
				cupiditate atque ipsum animi quo ullam, nemo soluta ut at fugiat pariatur facere, laboriosam
				exercitationem. Architecto odit, dolore.
			</p>
			<BrandHeading size={2}>Heading size: 2</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi dolorum, impedit sed
				blanditiis nobis quibusdam alias sequi enim unde, eos aliquam adipisci voluptates harum
				magni cupiditate iusto sit, itaque magnam.
			</p>
			<BrandHeading size={3}>Heading size: 3</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos, error nam amet
				adipisci optio perspiciatis exercitationem recusandae modi doloremque non odit fugiat, totam
				numquam provident magnam, vitae ipsa ullam.
			</p>
			<BrandHeading size={4}>Heading size: 4</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi dignissimos libero
				cupiditate recusandae harum provident, facere asperiores, sit aspernatur repellat iste
				dolorum sunt tenetur modi accusantium eligendi debitis amet voluptate.
			</p>
			<BrandHeading size={5}>Heading size: 5</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nemo facilis molestias
				voluptate rerum optio quisquam quia laudantium deleniti, ducimus, cum aperiam explicabo eum
				exercitationem. Molestiae dolorem, sunt ut velit.
			</p>
			<BrandHeading size={6}>Heading size: 6</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis pariatur doloremque
				nostrum optio, voluptates officia quis quam magni laborum omnis molestias sit corrupti
				eligendi vero itaque expedita eveniet quia, alias.
			</p>
			<BrandHeading size={7}>Heading size: 7</BrandHeading>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ratione libero cumque
				architecto quia, quaerat corporis. Maxime tenetur aliquam nemo provident autem modi, nam
				recusandae laboriosam. Repellat eligendi explicabo optio!
			</p>

			<hr />

			<h2>Invalid props</h2>
			<BrandHeading size={0}>Heading size too small</BrandHeading>
			<BrandHeading size={10}>Heading size too large</BrandHeading>
			<BrandHeading tag="span" size={5}>
				Heading tag not h1-h6
			</BrandHeading>
		</GEL>
	);
}

export default Example;
