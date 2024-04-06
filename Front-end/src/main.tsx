import * as ReactDOM from 'react-dom/client';
import { store } from './model/store';
import { Provider } from 'react-redux';
import { App } from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
