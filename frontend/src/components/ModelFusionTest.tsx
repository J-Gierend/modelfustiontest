import { useState } from "react";
import styles from "./ModelFusionTest.module.css";
import GenerateText from "./GenerateText";
import GenerateTextStream from "./GenerateTextStream";

const ModelFusionTest = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'GenerateText':
        return <GenerateText />;
      case 'GenerateTextStream':
        return <GenerateTextStream />;
      default:
        return null;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <p onClick={() => { console.log('Clicked!'); setSelectedComponent('GenerateText'); }}>generateText</p>
      <p onClick={() => { console.log('Clicked!'); setSelectedComponent('GenerateTextStream'); }}>generateTextStream</p>
      </div>
      <div className={styles.main}>
        {renderComponent()}
      </div>
    </div>
  );
};

export default ModelFusionTest;