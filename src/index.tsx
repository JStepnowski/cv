import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './theme/index.css';
import App from './App';
import {HashRouter} from 'react-router';
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </StrictMode>
  </HashRouter>
);
