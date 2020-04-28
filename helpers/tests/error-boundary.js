import React from 'react';

class ErrorBoundary extends React.Component {
	state = {
		error: null,
	};

	static getDerivedStateFromError(error) {
		return {
			error: error.toString(),
		};
	}

	render() {
		return this.state.error ? (
			<ul>
				<li>error: {JSON.stringify(this.state.error)}</li>
			</ul>
		) : (
			this.props.children
		);
	}
}

export { ErrorBoundary };
