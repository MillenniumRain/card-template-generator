import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/shared/router';
import { QueryProvider } from '@/shared/hooks/QueryContext';
import '@/shared/styles/app.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<QueryProvider>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</QueryProvider>
	// </React.StrictMode>
);
