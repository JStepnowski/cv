import 'ionicons/icons';
import './theme/index.css';

import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router';
import {RecoilRoot} from 'recoil';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter basename='/'>
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  </HashRouter>
);
