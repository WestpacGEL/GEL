import Dashboard from './pages';

export default {
	pages: () => [
		{
			label: 'Dashboard',
			path: '',
			component: Dashboard,
		},
		{
			listKey: 'Component',
		},
		{
			listKey: 'Pages',
		},
		{
			listKey: 'Users',
		},
	],
};
