export const usePopoverPosition = (triggerRef, popoverRef) => {
	// bail early without refs
	if (!triggerRef || !popoverRef) {
		throw new Error('You must pass two valid refs.');
	}

	if (typeof window === 'undefined') {
		return { placement: '', top: 0, left: 0 };
	}

	const trigger = triggerRef.current.getBoundingClientRect();
	const popover = popoverRef.current.getBoundingClientRect();
	let position;

	const remSize = parseInt(
		window.getComputedStyle(document.getElementsByTagName('html')[0]).fontSize
	);

	const left = (trigger.left - popover.width / 2 + trigger.width / 2) / remSize;

	if (popover.height > trigger.top) {
		const top = (trigger.top + window.scrollY + trigger.height + remSize) / remSize;
		position = { placement: 'bottom', top, left };
	} else {
		const top = (trigger.top + window.scrollY - popover.height - remSize) / remSize;
		position = { placement: 'top', top, left };
	}

	return position;
};
