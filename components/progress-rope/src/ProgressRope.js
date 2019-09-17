/** @jsx jsx */

import React, { Children, cloneElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme } from '@westpac/core';
import { ProgressRopeGroup } from './ProgressRopeGroup';

// ==============================
// Utils
// ==============================
// to add review/submit step

// ==============================
// Component
// ==============================
export const ProgressRope = ({ current, children, ...props }) => {
	// probably a better way to do this than set it to 0, pass as props?
	const [activeGroupIndex, setActiveGroupIndex] = useState(0);

	// should be a nicer way to do below
	const setActive = id => () => {
		if (activeGroupIndex === id) {
			setActiveGroupIndex(null);
		} else {
			setActiveGroupIndex(id);
		}
	};

	// maybe i need to do this logic in useEffect?
	// probably need to do the logic here or just before
	// cant be in the childrenWithProps function

	/* 
	have 2 pieces of logic
	- which one is open
		- this can probably be extracted out within the effect
		- this is based on the current being updated or the onclick accordion stuff
			- these 2 are currently conflicting with each other
	- position within open
		- this in the children with props piece
	*/
	// useEffect(
	// 	() => {
	// 		// setActiveGroupIndex()
	// 		let childCount = 0;
	// 		Children.forEach(children, (child, i) => {
	// 			if (child.type === ProgressRopeGroup) {
	// 				const grandChildren = Children.count(child.props.children);
	// 				if (current >= childCount && current <= childCount + grandChildren) {
	// 					console.log('entered');
	// 					console.log(i);
	// 					console.log(activeGroupIndex);
	// 					setActiveGroupIndex(i);
	// 				}
	// 			}
	// 		});
	// 	},
	// 	[current]
	// );

	/* 
	Clicking next should put focus back to the open thing
	- this is what causes the infinte loop 
	need to make links past the current step disabled
	
	*/
	const childrenWithProps = () => {
		let childCount = 0;
		return Children.map(children, (child, i) => {
			const isOpen = activeGroupIndex === i;
			console.log('i: ', i, 'isOpen: ', isOpen);
			// if (child && child.type) {	// is this necessary bro?? can probably move into one line
			console.log(child.type.name);
			if (child.type === ProgressRopeGroup) {
				const grandChildren = Children.count(child.props.children);
				if (current >= childCount) {
					childCount += grandChildren;
					if (current < childCount) {
						// current index is within here
						const pos = grandChildren - (childCount - current);
						// setActive(i);
						// cant do above as it will cause a re-render...
						return cloneElement(child, {
							current: pos,
							onClick: setActive(i),
							isOpen,
						});
					} else {
						// we have completed this group
						return cloneElement(child, {
							current,
							onClick: setActive(i),
							isOpen,
						});
					}
				} else {
					// we havent reach this far yet
					return cloneElement(child, { onClick: setActive(i), isOpen });
				}
			} else {
				// if not in a progress rope group/just a regular progress rope item
				// there must be a better way to do this??
				if (i < current) {
					return cloneElement(child, { status: 'complete' });
				} else if (i === current) {
					return cloneElement(child, { status: 'active' });
				}
				return child;
			}
			// }
		});
	};

	const common = {
		//this is on a wrapping div...
		// paddingTop: 60,
		// paddingBottom: 60,

		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};

	return <ol css={common}>{childrenWithProps()}</ol>;
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
