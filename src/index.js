import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SinglePageContext from './components/contexts/SinglePageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <SinglePageContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </SinglePageContext>
  // </React.StrictMode>
);
