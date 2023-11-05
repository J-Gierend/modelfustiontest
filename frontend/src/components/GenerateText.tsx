import { useState } from 'react';
import {BASE_URL} from '../config'

const GenerateText = () => {

    const [generatedText, setGeneratedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const generateText = async () => {
        setIsLoading(true);
        setGeneratedText("");
        const response = await fetch(`${BASE_URL}/getText`);
        const data = await response.text();
        setGeneratedText(data);
        setIsLoading(false);
    };
  
    return (
    <div>
      <h1>OpenAI Text</h1>
      <p>{generatedText}</p>
      <button disabled={isLoading} onClick={generateText}>
        Generate Text
      </button>
    </div>
  );
};

export default GenerateText;
