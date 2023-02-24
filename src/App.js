import './css/output.css';
import { MiddleCard } from './components/middleCard/middleCard';
import { SmallCard } from './components/smallCard/SmallCard';
import Layout from './components/Layout/Layout';

function App() {
	return (
		<Layout>
			<div className='space-y-16'>
				<SmallCard />

				<MiddleCard />

				{/* <SmallCard /> */}
			</div>
		</Layout>
	);
}

export default App;
