import { jsx } from '@westpac/core';
import { useState, useRef, useEffect } from 'react';
import throttle from 'lodash.throttle';

export const StickyHeader = (props) => {
	const ref = useRef();
	const [stuck, setStuck] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const cachedRef = ref.current;
		const observer = new IntersectionObserver(([e]) => setStuck(e.intersectionRatio < 1), {
			rootMargin: '-1px 0px 0px 0px',
			threshold: [1],
		});
		observer.observe(cachedRef);
		return () => observer.unobserve(cachedRef);
	}, [ref]);

	useEffect(() => {
		const handleScroll = throttle(() => {
			let hasScrolled = false;
			if (window.scrollY > 1) {
				hasScrolled = 'true';
			}
			setScrolled(hasScrolled);
		}, 10);

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			ref={ref}
			css={{
				position: 'sticky',
				top: 0,
				transition: 'box-shadow 0.2s ease 0s',
				zIndex: 1,
				...(stuck && scrolled && { boxShadow: '0 8px 8px rgba(0,0,0,0.24)' }),
			}}
			{...props}
		/>
	);
};
