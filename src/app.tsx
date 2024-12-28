import { StrictMode, ReactNode, FC, useContext, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@/shared/router';
import { QueryProvider } from '@/shared/hooks/QueryContext';
import useLocalStorage from '@/shared/hooks/LocalStorage';
interface AppProp {
	children?: ReactNode;
	className?: string;
}

export interface ILocalStorageContext {
	localUserId: string | null;
	setUserId: (value: string) => void;
}
export const LocalStorageContext = createContext<ILocalStorageContext>({
	localUserId: null,
	setUserId: () => {},
});
const App: FC<AppProp> = () => {
	const { localUserId, setValue: setUserId } = useLocalStorage<string>('userId');
	return (
		<StrictMode>
			<LocalStorageContext.Provider value={{ localUserId, setUserId }}>
				<QueryProvider>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</QueryProvider>
			</LocalStorageContext.Provider>
		</StrictMode>
	);
};

export default App;
