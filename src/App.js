import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
     <Weather defaultCity="New York"/>
     <footer> This project was coded by Vanessa Cadalso and is <a href="https://github.com/vcadalso/react-second-try" target="_blank" rel="noreferrer" 
      >open-sourced on GitHub</a> </footer>
      </div>
    </div>

  );
}


