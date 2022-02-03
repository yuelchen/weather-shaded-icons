import './App.css';
import ClearNight from './components/icons/ClearNight';
import ClearDay from './components/icons/ClearDay';
import CloudyNight from './components/icons/CloudyNight';
import CloudyDay from './components/icons/CloudyDay';
import Cloudy from './components/icons/Cloudy';
import CloudyDrizzle from './components/icons/CloudyDrizzle';
import CloudyRain from './components/icons/CloudyRain';
import CloudyHeavyRain from './components/icons/CloudyHeavyRain';
import CloudyThunderstorm from './components/icons/CloudyThunderstorm';
import Cloudy2 from './components/icons/Cloudy2';
import CloudyHail from './components/icons/CloudyHail';
import CloudySleet from './components/icons/CloudySleet';
import CloudySnowing from './components/icons/CloudySnowing';
import CloudySnowflake from './components/icons/CloudySnowflake';
import CloudySnowflake2 from './components/icons/CloudySnowflake2';
import Hail from './components/icons/Hail';
import Snowflake from './components/icons/Snowflake';
import CloudyDay2 from './components/icons/CloudyDay2';
import CloudyNight2 from './components/icons/CloudyNight2';
import CloudyDrizzle2 from './components/icons/CloudyDrizzle2';
import CloudyHeavyRain2 from './components/icons/CloudyHeavyRain2';
import CloudyHail2 from './components/icons/CloudyHail2';
import CloudyRain2 from './components/icons/CloudyRain2';
import CloudySleet2 from './components/icons/CloudySleet2';
import CloudySnowing2 from './components/icons/CloudySnowing2';
import CloudyThunderstorm2 from './components/icons/CloudyThunderstorm2';
// import { ReactComponent as CloudDouble } from './components/svg/cloudy-double.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <CloudDouble className="appliedClassName" ></CloudDouble> */}

        <ClearDay size={50}/>
        <ClearNight size={50} />
        <Cloudy size={50}  />
        <CloudyDay size={50} />
        <CloudyNight size={50} />
        <CloudyDrizzle size={50} />
        <CloudyRain size={50} />
        <CloudyHeavyRain size={50} />
        <CloudyThunderstorm size={50} />

        <CloudySnowflake size={50}  />
        <CloudySnowflake2 size={50}  />
        <Hail size={50}  />
        <Snowflake size={50} />
        
        <Cloudy2 size={50} />
        <CloudyDay2 size={50} />
        <CloudyNight2 size={50} />
        <CloudyDrizzle2 size={50} />
        <CloudyHail2 size={50} />
        <CloudyHeavyRain2 size={50} />
        <CloudyRain2 size={50} />
        <CloudySleet2 size={50} />
        <CloudySnowing2 size={50} />
        <CloudyThunderstorm2 size={50} />
        <p>
          Edit <code>src/App.js</code> and save to reload.    
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
