import logo from './assets/YBLogo.png';
import './App.css';
import {Example} from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <img src={logo} alt="logo" />
        <Example></Example>
        <p>
          ילנה בולדין fdsfdssfdsfsdds
            fsdfdsfsd
            fdssdfds
            fsdsdfsd
            dfss
            מאמנת מוסמכת באיזור המרכז
        </p>
      </header>
    </div>
  );
}

export default App;