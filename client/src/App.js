import logo from './logo.svg';
import './App.css';

import AppHeader from './components/AppHeader';
import Home from './pages/Home';

function App() {
  return (
      <AppHeader>
        <Home></Home>
      </AppHeader>
  );
}

export default App;
