import './App.css';
// import FunctionalGreeting from './components/FunctionalGreetings'; //
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import Sidebar from "./components/Sidebar";
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class Comonent!"/>
      <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      <NavBarSimple />
      <Sidebar />
      
    </div>
  );
}

export default App;
