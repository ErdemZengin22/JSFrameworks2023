import './App.css';

import { Heading } from './components/Heading/Heading';
import { Welcome } from './components/Heading/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Ariadna" />
      <Welcome />
    </div>
  );
}

export default App;
