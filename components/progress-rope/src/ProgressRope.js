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
		throw new Error('ProgressRope sub-components should be wrapped in a <ProgressRope>.');
	}

	return context;
};

// ==============================
// Component
// ==============================
/* 
TO DO
- links unclickable until they reach that step via next
- can go back to a step but the previous stuff stays red i.e. havent lost progress if go back
- maybe I generate a 2d array and have a status of everything

[0][0] = incomplete
[0][1] = incomplete
[1][0] = incomplete
[1][1] = incomplete
[2][0] = incomplete
[2][1] = incomplete
*/
export const ProgressRope = ({ current, children, ...props }) => {
	// might refactor these names
	const [progress, setProgress] = useState({
		grouped: false,
		currStep: current, // current step and group it is in
		currGroup: 0,
		openGroup: 0,
		lastGroup: 0, // furthest visited group && step
		lastStep: current,
		status: 'incomplete',
	});

	const [ropeShape, setRopeShape] = useState([]);

	const handleClick = index => {
		setProgress({ ...progress, openGroup: index !== progress.openGroup ? index : null });
	};

	// is this even better? gonna calculate the shit each time?
	/* 
	// maybe I can do maths to find out where the current is in the array without looping
	// then I can change that value to that?
	// need a way to mark as complete or current or both
	*/
	// useEffect(() => {
	// 	const arr = [];
	// 	Children.forEach(children, (child, i) => {
	// 		arr.push(Array(Children.count(child.props.children)).fill('incomplete'));
	// 	});
	// 	console.log(arr);
	// }, []);

	useEffect(
		() => {
			let childCount = 0;

			const updatedProgress = {
				...progress,
				currStep: current,
				...(!progress.grouped && current > progress.lastStep && { lastStep: current }),
			};

			Children.forEach(children, (child, i) => {
				if (child.type === ProgressRopeGroup) {
					updatedProgress['grouped'] = true;
					const grandChildren = Children.count(child.props.children);
					if (current >= childCount) {
						childCount += grandChildren;
						if (current < childCount) {
							// current index is in here
							const pos = grandChildren - (childCount - current);
							Object.assign(updatedProgress, {
								currStep: pos,
								currGroup: i,
								openGroup: i,
								...(progress.lastGroup === i && pos > progress.lastStep && { lastStep: pos }),
								...(progress.lastGroup < i && { lastGroup: i }),
							});
						}
					}

					// for review step styling
				} else if (progress.grouped && child.type === ProgressRopeItem && current === childCount) {
					Object.assign(updatedProgress, {
						openGroup: null,
						lastGroup: i,
						currStep: 'review',
						lastStep: 'review',
					});
				}
			});

			// for review step styling
			if (progress.grouped && current > childCount) {
				Object.assign(updatedProgress, { status: 'complete' });
			}

			// console.log(updatedProgress);
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
