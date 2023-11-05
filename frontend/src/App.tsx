import axios from 'axios';
import './App.css';
import ModelFusionTest from './components/ModelFusionTest';

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <h1 className="HeaderText">Model Fusion Sandbox</h1>
      <ModelFusionTest></ModelFusionTest>
    </div>
  );
}

export default App;
