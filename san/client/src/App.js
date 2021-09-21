import { useEffect } from 'react';
import axios from 'axios';
function App() {
  useEffect(async () => {
    let { data } = await axios.get('http://localhost:4000/api/todos');
    console.log('Data', data);
  }, []);
  return (
    <div className="App">
      <h1>Head Of States At UNGA</h1>
      <h2>{process.env.FIRST}</h2>
    </div>
  );
}

export default App;
