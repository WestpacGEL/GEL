import { Dashboard, Settings } from './pages';

export default {
	pages: () => [
		{
			label: 'Dashboard',
			path: '',
			component: Dashboard,
		},
		{
			listKey: 'Page',
		},
		{
			listKey: 'User',
		},
		{
			// listKey: 'Setting',
			label: 'Settings',
			path: 'settings',
			component: Settings,
		},
	],
};
