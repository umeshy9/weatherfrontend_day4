import logo from './logo.svg';
import './App.css';
import WeatherFetch from './weatherFetch';

const styles = {
  color: 'purple',
  fontSize: 10,
  border: "1px solid purple",
};

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  return (
    <div style = {styles} className='row' >
        <h1>Weather App</h1>
        <div><WeatherFetch city = {'Bangalore'}/></div>
        <div><WeatherFetch city = {'Delhi'}/></div>
        <div><WeatherFetch city = {'Mumbai'}/></div>
        <div><WeatherFetch city = {'Chennai'}/></div>
    </div>
  );
}

export default App;
