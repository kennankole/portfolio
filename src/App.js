import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './features/navigation/NavigationMenu.css';
import Menu from './features/Menu';

const App = () => (
  <main>
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  </main>
);

export default App;
