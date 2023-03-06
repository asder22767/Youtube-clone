import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(
		localStorage.getItem('token') ? true : false
	);

	useEffect(() => {
		if (!isLogin) {
			localStorage.removeItem('token');
		}
	}, [isLogin]);

	return (
		<AuthContext.Provider value={{ isLogin, setIsLogin }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
