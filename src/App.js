import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UWaterloo Mechatronics Capstone Project
        </p>
        <p
          className="App-paragraph"
        >
          Aryan Kalia | Dhruv Upadhyay | Mohamed Goha | Saksham Ahuja
        </p>
        <a className="App-paragraph App-link"
            href="https://ring-diascia-8a8.notion.site/e9f5e88d51244b42928055a13674efc1?v=6aae393196134838bbc31bf9d476bda8&pvs=4">
            See log book
        </a>
      </header>
    </div>
  );
}

export default App;
