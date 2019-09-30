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
import { jsx, useTheme } from '@westpac/core';
import { ProgressRopeGroup } from './ProgressRopeGroup';

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
	// probably a better way to do this than set it to 0, pass as props?

	// might refactor these names
	const [progress, setProgress] = useState({
		grouped: false,
		openGroup: 0,
		activeGroup: 0,
		activeStep: current,
	});

	const handleClick = index => {
		setProgress({ ...progress, openGroup: index });
	};

	// also need to optimise for none group? maybe its a non issue since it wont enter the ifs, just loop through numChildren
	useEffect(
		() => {
			let childCount = 0;

			const updatedProgress = { activeStep: current };

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
				}
			});

			setProgress(updatedProgress);
		},
		[current]
	);

	// need to figure out a better way to add the index to children if there is?
	return (
		<ProgressRopeContext.Provider value={{ ...progress, handleClick }}>
			<ol css={{ position: 'relative', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
				{Children.map(children, (child, i) => cloneElement(child, { index: i }))}
			</ol>
		</ProgressRopeContext.Provider>
	);
};

// ==============================
// Types
// ==============================

ProgressRope.propTypes = {
	status: PropTypes.string,
	/* I feel like I should use a different variable name */
	current: PropTypes.number,
};

ProgressRope.defaultProps = {};
