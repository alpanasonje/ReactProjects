
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import Student from './components/Student';
import Welcome from './components/Welcome';
import Welcome1 from './components/Welcome1';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Hello/>
      <Welcome nm="PVG Students" batch="JN1"></Welcome>

      <Hello/>
      <Welcome nm="PVG Students" batch="JN2"></Welcome>
      <Welcome1/>
      <Greet name="Nashik"/>  <Message/> */}

     
      <Student percentage="92"/>

      <Counter/>
      </header>
    </div>
  );
}

export default App;
