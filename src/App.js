import logo from './assets/YBLogo.png';

import './App.css';
import {MenuBar} from './components/Menu/Menu';
import {Home} from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
         <img src={logo} alt="logo3" />
        <MenuBar/>
      </header>
    </div>
  );
}

export default App;