import logo from './logo.svg';
import './App.css';
import WeatherFetch from './weatherFetch';

const styles = {
  color: 'purple',
  fontSize: 10,
  border: "1px solid purple"
};

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  return (
    
    <div className = 'row' style = {styles}>
        <div style = {{margin : 10}}><h1>Weather App</h1></div>
        <div className = 'block'><WeatherFetch city = {'Bangalore'}/></div>
        <div className = 'block'><WeatherFetch city = {'Delhi'}/></div>
        <div className = 'block'><WeatherFetch city = {'Mumbai'}/></div>
        <div><WeatherFetch city = {'Chennai'}/></div>
    </div>
  );
}

export default App;