import { jsx } from '@westpac/core';
import { useReducer } from 'react';

export const useProgress = (startIndex = 0) => {
	const initialState = { index: startIndex };

	const progressReducer = (state, action) => {
		switch (action.type) {
			case 'next':
				return { index: state.index + 1 };
			case 'prev':
				return { index: state.index === 0 ? 0 : state.index - 1 };
			case 'goto':
				return { index: action.index };
			default:
				throw new Error();
		}
	};

	const [state, dispatch] = useReducer(progressReducer, initialState);
	return [state, dispatch];
};

export const Link = ({ index, dispatch, ...props }) => (
	<a
		href="#"
		onClick={(e) => {
			e.preventDefault();
			dispatch({ type: 'goto', index });
		}}
		{...props}
	/>
);

export const Wrapper = (props) => <div css={{ width: '300px' }} {...props} />;
