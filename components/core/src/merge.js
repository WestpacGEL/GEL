import mergeOrg from 'lodash.merge';

// now our merge does not change any of our input
export const merge = (...rest) => mergeOrg({}, ...rest);
