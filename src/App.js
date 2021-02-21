import logo from './assets/YBLogo.png';
import facebook from './assets//Social/facebook.png';
import instagram from './assets/Social/instagram.png';

import './App.css';
import {MenuBar} from './components/Menu/Menu';
import {About} from './Pages/AboutMe/About';
import {Contact} from './Pages/Contact/Contact';
import {Cake} from './Pages/Cakes/Cakes';
import {Gallery} from './Pages/Gallery/Gallery';
import {Naturopathy} from './Pages/Naturopathy/Naturopathy';
import {Training} from './Pages/Training/Training';
import {Home} from './Pages/Home/Home';
import {Clips} from './Pages/Clips/Clips';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
         <img src={logo} alt="logo3" />
         <a href="https://www.instagram.com/yelenaboldin/"> <img src={instagram} alt="logo1" /> </a>
        <a href="https://www.facebook.com/lena.boldin"> <img src={facebook} alt="logo2" /> </a>
        <MenuBar></MenuBar>
          <Home></Home>
        <About></About>
          <Training></Training>
          <Naturopathy></Naturopathy>
          <Gallery></Gallery>
          <Clips></Clips>
          <Cake></Cake>
          <Contact></Contact>
      </header>
    </div>
  );
}

export default App;