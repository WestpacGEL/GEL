import mergeWithOrg from 'lodash.mergewith';

// now our merge does not change any of our input
export const mergeWith = (...rest) => mergeWithOrg({}, ...rest);
