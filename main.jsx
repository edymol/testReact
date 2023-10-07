import { createRoot } from 'react-dom/client';
import { App } from './src/app.jsx';
import { ToDo } from './src/ToDo.jsx';
import { Counter } from './src/Counter.jsx'; 

const root = createRoot(document.getElementById('app'));
root.render(
  <>
    
    <App />
    <Counter />
    <ToDo />
  </>
);
