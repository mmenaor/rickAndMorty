import './App.css';
import Location from './components/Location';
import banner from './images/banner.png';
import bannerText from './images/bannerText.png';

function App() {
  return (
    <div className="App">
      <header>
        <img className="banner" src={banner} alt="Rick and Morty's banner" />
        <img className="bannerText" src={bannerText} alt="Rick and Morty's title" />
      </header>
      <Location />
    </div>
  );
}

export default App;
