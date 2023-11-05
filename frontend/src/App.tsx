import axios from 'axios';
import './App.css';
import ModelFusionTest from './components/ModelFusionTest';

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <ModelFusionTest></ModelFusionTest>
    </div>
  );
}

export default App;
