import './App.css';
// import FunctionalGreeting from './components/FunctionalGreetings'; //
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import Sidebar from "./components/Sidebar";
import NavBarSimple from './components/NavBarSimple';
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";


function App() {
  return (
    <div className="App">
      <header>
      <StatefulGreeting greeting="I'm a stateful class Comonent!"/>
      </header>
      <nav>
        <NavBarSimple />
      </nav>
      <article>
        <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
      </article>
      <aside>
        <Sidebar />
      </aside>
      <extra>
        <EventsFunctional />
      <EventsClass />
      <EventBinding />
      </extra>
      

    </div>
  );
}

export default App;
