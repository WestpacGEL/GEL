import * as semver from 'semver';

export const filterChangelog = (rawLogs, range) => {
	return range ? rawLogs.filter(e => semver.satisfies(e.version, range)) : rawLogs;
};
