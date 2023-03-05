/**
 * Warn consumers in development environment only.
 *
 * @param {boolean} condition - The condition that must be met
 * @param {string} message - The message to display if the condition is met
 *
 * @example
 * devWarning('some string' && 5, 'This message will be printed')
 */
export function devWarning(condition: boolean, message: string): void {
	if (process.env.NODE_ENV !== 'production') {
		if (condition) {
			console.error('🛑 GEL component Warning\n' + message);
		}
	}
}
