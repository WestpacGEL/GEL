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
import { ProgressRopeItem } from './ProgressRopeItem';

// ==============================
// Context and Consumer Hook
// ==============================
const ProgressRopeContext = createContext();

export const useProgressRopeContext = () => {
	const context = useContext(ProgressRopeContext);

	if (!context) {
		throw new Error('ProgressRope sub-components should be wrapped in a <Modal>.');
	}

	return context;
};

// ==============================
// Component
// ==============================
export const ProgressRope = ({ current, children, ...props }) => {
	// might refactor these names
	const [progress, setProgress] = useState({
		grouped: false,
		openGroup: 0,
		activeGroup: 0,
		activeStep: current,
		status: 'incomplete',
	});

	const handleClick = index => {
		setProgress({ ...progress, openGroup: index !== progress.openGroup ? index : null });
	};

	useEffect(
		() => {
			let childCount = 0;

			const updatedProgress = { ...progress, activeStep: current };

			Children.forEach(children, (child, i) => {
				if (child.type === ProgressRopeGroup) {
					const grandChildren = Children.count(child.props.children);
					if (current >= childCount) {
						childCount += grandChildren;
						if (current < childCount) {
							// current index is in here
							const pos = grandChildren - (childCount - current);
							Object.assign(updatedProgress, {
								grouped: true,
								openGroup: i,
								activeGroup: i,
								activeStep: pos,
							});
						}
					}
				} else if (progress.grouped && child.type === ProgressRopeItem && current === childCount) {
					Object.assign(updatedProgress, { openGroup: null, activeGroup: i, activeStep: 'review' });
				}
			});

			if (progress.grouped && current > childCount) {
				Object.assign(updatedProgress, { status: 'complete' });
			}

			setProgress(updatedProgress);
		},
		[current]
	);

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
