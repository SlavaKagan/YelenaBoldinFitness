
import './App.css';
import {MenuBar} from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <MenuBar/>
      </header>
    </div>
  );
}

export default App;