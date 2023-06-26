import './App.css';

import { phones } from './images/phones';
import { technologies } from './images/technologies';

function App() {
  return (
    <div className="App">
      {Object.values(phones).map((imageUrl, index) => {
        return <img alt="a phone" src={imageUrl} key={`phone-${index}`} />;
      })}

      {technologies.map((item, index) => {
        return (
          <img alt="a technology" src={item} key={`technology-${index}`} />
        );
      })}
    </div>
  );
}

export default App;
