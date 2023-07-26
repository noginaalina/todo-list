import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import GlobalStyles from './assets/styles/global.styles'
import TodosProvider from "./provider/TodoProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <TodosProvider>
        <App/>
      </TodosProvider>
        <GlobalStyles/>
    </React.StrictMode>
);
