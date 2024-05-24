//Tools
import { createRoot } from 'react-dom/client';
import { ProductType, SettingsType, PracticeType } from '../context/contextProviders';

//App
import App from './pages/main';

//Styling
import './styles.css';

const root = createRoot(document.getElementById('root') as HTMLInputElement);
root.render(
  <ProductType>
    <SettingsType>
      <PracticeType>
        <App />
      </PracticeType>
    </SettingsType>
  </ProductType>
);