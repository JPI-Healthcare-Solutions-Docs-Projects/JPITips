//Tools
import { createRoot } from 'react-dom/client';
import { ProductType } from './context/contextProviders';

//App
import App from './pages/tipsPage/jpiTipsPage';

//Styling
import '../index.css';

const root = createRoot(document.getElementById('root') as HTMLInputElement);
root.render(
    <ProductType>
        <App />
    </ProductType>
);