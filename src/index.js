import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthContextProvider from './components/context/authContext';
import CounterContextProvider from './components/context/counterContext';
import LanguageContextProvider from './components/context/languageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<AuthContextProvider>
		<CounterContextProvider>
			<LanguageContextProvider>
				<App />
			</LanguageContextProvider>
		</CounterContextProvider>
	</AuthContextProvider>
	// </React.StrictMode>
);
