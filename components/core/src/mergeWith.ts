import mergeWithOrg from 'lodash.mergewith';

// now our merge does not change any of our input
export function mergeWith<T>(...rest: Array<T>): T {
	return mergeWithOrg({}, ...rest);
}
