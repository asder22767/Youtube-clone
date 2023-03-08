import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import AuthContextProvider from './components/context/authContext';
import CounterContextProvider from './components/context/counterContext';
import LanguageContextProvider from './components/context/languageContext';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<AuthContextProvider>
		<CounterContextProvider>
			<LanguageContextProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</LanguageContextProvider>
		</CounterContextProvider>
	</AuthContextProvider>
	// </React.StrictMode>
);
