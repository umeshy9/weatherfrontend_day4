import logo from './logo.svg';
import './App.css';
import CitySelector from './citySelector';

const styles = {
  color: 'purple',
  fontSize: 10,
  border: "1px solid purple"
};

function App() {
  const api_key = process.env.REACT_APP_API_KEY;
  return (
    
    <div className = 'row' style = {styles}>
        <div style = {{margin : 10}}><h1>Weather App</h1></div><br/>
        <div className = 'row'><CitySelector/></div>
    </div>
  );
}

export default App;