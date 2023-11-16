import './App.css';
// import FunctionalGreeting from './components/FunctionalGreetings'; //
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import Sidebar from "./components/Sidebar";
import NavBarSimple from './components/NavBarSimple';
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import NavBarForm from "./components/NavBarForm";


function App() {
  return (
    <div className="App">
      <header>
      <StatefulGreeting greeting="I'm a stateful class Comonent!"/>
      </header>
      <nav>
        <NavBarSimple />
        <NavBarForm />
      </nav>
      <article>
        <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike" age="32" />
        <ConditionalRenderingClass />
        <ConditionalRenderingFunctional connect={true} />
        <NestingComponents />
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
