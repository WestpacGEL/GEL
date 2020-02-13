import dynamicComponents from '../../../../schema/block-components';
import React from 'react';

export default function DynamicComponents({ data }) {
	let Comp = dynamicComponents[data.component].component;
	return <Comp {...data.props} />;
}
