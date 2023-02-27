import { jsx } from '@westpac/core';
import { Alert as GELAlert } from '@westpac/alert';
import { Heading as GELHeading } from '@westpac/heading';
import { Body as BodyOverride } from '../body';

const HeadingOverride = ({ state: { headingTag }, ...rest }) => (
	<GELHeading size={8} tag={headingTag} {...rest} />
);

export const Alert = (props) => (
	<GELAlert
		overrides={{
			Body: {
				component: BodyOverride,
			},
			Heading: {
				component: HeadingOverride,
			},
		}}
		{...props}
	/>
);
