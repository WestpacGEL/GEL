/** @jsx jsx */

import React, {
	Children,
	cloneElement,
	createContext,
	useState,
	useEffect,
	useContext,
} from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@westpac/core';
import { ProgressRopeGroup } from './ProgressRopeGroup';

// ==============================
// Context and Consumer Hook
// ==============================
const ProgressRopeContext = createContext();

export const useProgressRopeContext = () => {
	const context = useContext(ProgressRopeContext);

	if (!context) {
		throw new Error('ProgressRope sub-components should be wrapped in a <ProgressRope>.');
	}

	return context;
};

// ==============================
// Utils
// ==============================
const createRopeGraph = children => {
	const ropeGraph = [];
	let grouped = false;
	Children.forEach(children, (child, i) => {
		if (child.type === ProgressRopeGroup) {
			grouped = true;
			ropeGraph.push(Array(Children.count(child.props.children)).fill('unvisited'));
		} else {
			ropeGraph.push(['unvisited']);
		}
	});
	return { ropeGraph, grouped };
};

// ==============================
// Component
// ==============================
export const ProgressRope = ({ current, children, ...props }) => {
	const [progress, setProgress] = useState({
		currStep: current,
		currGroup: 0,
		openGroup: 0,
		...createRopeGraph(children),
	});

	const handleClick = index => {
		setProgress({ ...progress, openGroup: index !== progress.openGroup ? index : null });
	};

	useEffect(() => {
		let itemCount = 0;
		const updatedGraph = progress.ropeGraph.map(group => [...group]); // deep copy
		const updatedProgress = { ...progress };

		if (progress.grouped) {
			progress.ropeGraph.forEach((group, i) => {
				if (current >= itemCount) {
					itemCount += group.length;
					if (current < itemCount) {
						// current index is in here
						const pos = group.length - (itemCount - current);
						updatedGraph[i][pos] = 'visited';
						Object.assign(updatedProgress, {
							currStep: pos,
							currGroup: i,
							openGroup: i,
							ropeGraph: updatedGraph,
						});
					}
				}
			});
		} else {
			if (current < updatedGraph.length && current >= 0) updatedGraph[current][0] = 'visited';
			Object.assign(updatedProgress, { currStep: current, ropeGraph: updatedGraph });
		}

		setProgress(updatedProgress);
	}, [current]);

	return (
		<ProgressRopeContext.Provider value={{ ...progress, handleClick }}>
			<ol css={{ position: 'relative', listStyle: 'none', paddingLeft: 0, margin: 0 }} {...props}>
				{Children.map(children, (child, i) => cloneElement(child, { index: i }))}
			</ol>
		</ProgressRopeContext.Provider>
	);
};

// ==============================
// Types
// ==============================
ProgressRope.propTypes = {
	current: PropTypes.number,
};

ProgressRope.defaultProps = {
	current: 0,
};
