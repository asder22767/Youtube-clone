import { createContext, useState } from 'react';

export const LanguageContext = createContext(0);

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		localStorage.getItem('language')
			? localStorage.getItem('language')
			: 'uz'
	);

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage,
			}}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
