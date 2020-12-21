import logo from './logo.svg';
import './App.css';
import WeatherFetch from './weatherFetch';
import DelhiWeather from './DelhiWeather';
import MumbaiWeather from './MumbaiWeather';

const styles = {
  color: 'purple',
  fontSize: 10,
  border: "1px solid purple",
};

function App() {
  return (
    <div style = {styles} className='row' >
        <h1>Weather App</h1>
        <div><WeatherFetch /></div>
        <div><DelhiWeather /></div>
        <div><MumbaiWeather /> </div>
    </div>
  );
}

export default App;
