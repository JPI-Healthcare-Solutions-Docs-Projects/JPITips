import { createRoot } from 'react-dom/client';
import App from './pages/tipsPage/jpiTipsPage';
import '../index.css';

const root = createRoot(document.getElementById('root') as HTMLInputElement);
root.render(<App/>);