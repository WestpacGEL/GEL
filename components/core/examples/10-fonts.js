import React from 'react';

export default () => (
	<>
		<h2>Body font</h2>

		<h1 className="body-font">Heading One</h1>
		<h2 className="body-font">Heading Two</h2>
		<h3 className="body-font">Heading Three</h3>
		<h4 className="body-font">Heading Four</h4>
		<h5 className="body-font">Heading Five</h5>
		<h6 className="body-font">Heading Six</h6>

		<p className="body-font">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sed. Soluta neque numquam cupiditate voluptates! Ullam earum veritatis praesentium distinctio aperiam corporis provident id, modi. Fuga perferendis quam, doloribus. Dolore!
		</p>
		<p className="body-font" style={{fontWeight: 100}}>Thin: 100</p>
		<p className="body-font" style={{fontWeight: 200}}>Extra light: 200</p>
		<p className="body-font" style={{fontWeight: 300}}>Light: 300</p>
		<p className="body-font" style={{fontWeight: 400}}>Regular: 400</p>
		<p className="body-font" style={{fontWeight: 500}}>Medium: 500</p>
		<p className="body-font" style={{fontWeight: 600}}>SemiBold: 600</p>
		<p className="body-font" style={{fontWeight: 700}}>Bold: 700</p>
		<p className="body-font" style={{fontWeight: 800}}>Black: 800</p>
		<p className="body-font" style={{fontWeight: 900}}>Super: 900</p>

		<hr />

		<h2>Brand font</h2>

		<h1 className="brand-font">Heading One</h1>
		<h2 className="brand-font">Heading Two</h2>
		<h3 className="brand-font">Heading Three</h3>
		<h4 className="brand-font">Heading Four</h4>
		<h5 className="brand-font">Heading Five</h5>
		<h6 className="brand-font">Heading Six</h6>

		<p className="brand-font" style={{fontWeight: 'bold'}}>
			This is bold for some brands. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sed. Soluta neque numquam cupiditate voluptates! Ullam earum veritatis praesentium distinctio aperiam corporis provident id, modi. Fuga perferendis quam, doloribus. Dolore!
		</p>
		<p className="brand-font">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sed. Soluta neque numquam cupiditate voluptates! Ullam earum veritatis praesentium distinctio aperiam corporis provident id, modi. Fuga perferendis quam, doloribus. Dolore!
		</p>
		<p className="brand-font" style={{fontWeight: 300}}>
			This is light for some brands. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, sed. Soluta neque numquam cupiditate voluptates! Ullam earum veritatis praesentium distinctio aperiam corporis provident id, modi. Fuga perferendis quam, doloribus. Dolore!
		</p>
	</>
);
