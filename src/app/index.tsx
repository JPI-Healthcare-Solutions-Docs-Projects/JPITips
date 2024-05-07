//Tools
import { createRoot } from 'react-dom/client';
import { ProductType, SettingsType } from './context/contextProviders';

//App
import App from './pages/tipsPage/jpiTipsPage';

//Styling
import '../index.css';

//Context when settings button is clicked

const root = createRoot(document.getElementById('root') as HTMLInputElement);
root.render(
    <ProductType>
        <SettingsType>
            <App />
        </SettingsType>
    </ProductType>
);