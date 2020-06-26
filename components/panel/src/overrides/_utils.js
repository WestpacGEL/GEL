import { useMediaQuery } from '@westpac/core';

export const blenderReconciler = (base, modifiers = []) => {
	const mq = useMediaQuery();
	return mq(
		Object.assign(
			{},
			base,
			...modifiers.map((m) => {
				const { label: modifierClass, ...modifierStyles } = m;
				return { [`&.${modifierClass}`]: modifierStyles };
			})
		)
	)[0];
};
