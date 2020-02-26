import dynamicComponents from '../../../../dynamic-blocks/';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		console.log('Failed to render dynamic block', { error, errorInfo });
	}

	render() {
		if (this.state.hasError) {
			return null;
		}

		return this.props.children;
	}
}

export default function DynamicComponents({ data }) {
	let Comp = dynamicComponents[data.component]
		? dynamicComponents[data.component].component
		: () => null;
	return (
		<ErrorBoundary>
			<Comp {...data.props} context="website" />
		</ErrorBoundary>
	);
}
