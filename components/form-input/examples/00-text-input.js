import React, { Fragment } from "react";

import { FormInput } from "../src";
// import { FormGroup } from '../../form/src';
import { Button } from "../../button/src";

const sizes = ["small", "medium", "large", "xlarge"];
const widths = [2, 3, 4, 5, 10, 20, 30];

export default () => (
  <>
    <h2>Default instance (no styling props)</h2>
    <FormInput />

    <hr />

    <h2>Size</h2>
    {sizes.map((s, i, arr) => (
      <Fragment key={i}>
        <FormInput size={s} placeholder={s.replace(s[0], s[0].toUpperCase())} />
        {i < arr.length - 1 && <br />}
      </Fragment>
    ))}

    <hr />

    <h2>Invalid</h2>
    <FormInput invalid />

    <hr />

    <h2>Disabled</h2>
    <FormInput disabled />
    <br />
    <FormInput disabled value="This input is disabled and contains a value" />

    <hr />

    <h2>Readonly</h2>
    <FormInput readOnly value="This value is readonly" />

    <hr />

    <h2>Inline</h2>
    <em>Note: requires the form package’s FormGroup component (WIP)</em>
    {/*<FormGroup inline>
			<FormInput /> <FormInput /> <Button type="submit">Submit</Button>
		</FormGroup>*/}

    <hr />

    <h2>Fixed width</h2>
    {widths.map((w, i, arr) => (
      <Fragment key={i}>
        <FormInput width={w} placeholder={w} />
        {i < arr.length - 1 && <br />}
      </Fragment>
    ))}
  </>
);
