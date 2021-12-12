import ReactDOM from 'react-dom';

import App from './pages/App';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

container && root.render(<App />);