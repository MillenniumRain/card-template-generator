import CardGenerator from '@/pages/CardGenerator';
import { ROUTES } from '@/shared/constants/endpoint';
import { RouteObject, useRoutes } from 'react-router-dom';

const allRoutes: RouteObject[] = [
	{
		path: ROUTES.APP_ROOT,
		element: <CardGenerator />,
	},
	{
		path: '/*',
		element: <CardGenerator />,
	},
];

export default function Router() {
	const route = useRoutes(allRoutes);
	return route;
}
