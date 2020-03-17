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
			listKey: 'Image',
		},
		{
			listKey: 'Category',
		},
		{
			listKey: 'User',
		},
		{
			label: 'Settings',
			path: 'settings',
			component: Settings,
		},
	],
};
