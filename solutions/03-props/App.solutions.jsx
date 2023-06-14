import "./App.css";
import Welcome from "./component/Welcome/Welcome";
import Heading from "./component/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Welcome name="Jamal" />
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
    </div>
  );
}

export default App;
