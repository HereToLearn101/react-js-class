// import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import AboutMe from './AboutMe';

// wrapping your html element witih function is what, in React JS, called JSX.
function App() {
  return (
    <div className="App bg--blue">
      <div className="app-body">
        <HelloWorld />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
