import { jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';

export const Code = ({ children }) => {
	const { COLORS, SPACING } = useBrand();

	return (
		<pre
			css={{
				boxSizing: 'border-box',
				overflow: 'auto',
				background: COLORS.background,
				padding: SPACING(2),
				border: `1px solid ${COLORS.border}`,
				marginTop: SPACING(4),
				tabSize: '2em',
				MozTabSize: '2em',
				OTabSize: '2em',
			}}
		>
			<code>{children}</code>
		</pre>
	);
};

export const NormalizeHtml = () => (
	<Fragment>
		<main>&lt;main&gt;</main>
		<h1>&lt;h1&gt;</h1>
		<hr />
		<pre>&lt;pre&gt;</pre>
		<a href="#">&lt;a&gt;</a>
		<br />
		<br />
		<abbr title="This is a title">&lt;abbr[title]&gt;</abbr>
		<br />
		<br />
		<b>&lt;b&gt;</b> <strong>&lt;strong&gt;</strong>
		<br />
		<br />
		<code>&lt;code&gt;</code> <kbd>&lt;kbd&gt;</kbd> <samp>&lt;samp&gt;</samp>
		<br />
		<br />
		<small>&lt;small&gt;</small>
		<br />
		<br />
		<sub>&lt;sub&gt;</sub>
		<br />
		<br />
		<sup>&lt;sup&gt;</sup>
		<br />
		<br />
		<img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
			width="30"
			height="30"
			alt=""
		/>
		<br />
		<br />
		<button>&lt;button&gt;</button> <button type="button">&lt;button type="button"&gt;</button>{' '}
		<button type="reset">&lt;button type="reset"&gt;</button>{' '}
		<button type="submit">&lt;button type="submit"&gt;</button>
		<br />
		<br />
		<input defaultValue="&lt;input&gt;" />
		<br />
		<br />
		<select>
			<option>&lt;option&gt;</option>
			<optgroup label="&lt;optgroup&gt;">
				<option>&lt;option&gt;</option>
				<option>&lt;option&gt;</option>
			</optgroup>
		</select>
		<br />
		<br />
		<textarea defaultValue="&lt;textarea&gt;" />
		<br />
		<br />
		<fieldset>&lt;fieldset&gt;</fieldset>
		<br />
		<fieldset>
			<legend>&lt;legend&gt;</legend>
		</fieldset>
		<br />
		<progress>&lt;progress&gt;</progress>
		<br />
		<br />
		<input type="checkbox" htmlFor="example-checkbox" />
		<label id="example-checkbox">&lt;input type="checkbox"&gt;</label>
		<br />
		<br />
		<input type="radio" htmlFor="example-radio" />
		<label id="example-radio">&lt;input type="radio"&gt;</label>
		<br />
		<br />
		<label id="example-number">&lt;input type="number"&gt;</label>
		<br />
		<input type="number" htmlFor="example-number" />
		<br />
		<br />
		<label id="example-search">&lt;input type="search"&gt;</label>
		<br />
		<input type="search" htmlFor="example-search" />
		<br />
		<br />
		<label htmlFor="example-file">::-webkit-file-upload-button</label>
		<br />
		<input type="file" id="example-file" />
		<br />
		<br />
		<details>&lt;details&gt;</details>
		<br />
		<details>
			<summary>&lt;summary&gt;</summary>
			&lt;details&gt;
		</details>
		<p>&lt;template&gt; (hidden)</p>
		<template>&lt;template&gt;</template>
		<p>[hidden] (hidden)</p>
		<div hidden>[hidden]</div>
	</Fragment>
);
