import './css/output.css';
import { MiddleCard } from './components/middleCard/middleCard';
import { SmallCard } from './components/smallCard/SmallCard';
import Layout from './components/Layout/Layout';
import React from 'react';
import CounterContextProvider from './components/context/counterContext';
import LanguageContextProvider from './components/context/languageContext';

function App() {
	return (
		<CounterContextProvider>
			<LanguageContextProvider>
				<Layout>
					<div className='space-y-16'>
						<SmallCard />

						<MiddleCard />

						{/* <SmallCard /> */}
					</div>
				</Layout>
			</LanguageContextProvider>
		</CounterContextProvider>
	);
}

export default App;
