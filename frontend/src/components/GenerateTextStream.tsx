import { useState } from 'react';
import {BASE_URL} from '../config'

const GenerateTextStream = () => {

    const [generatedTextStream, setGeneratedTextStream] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const generateTextStream = async () => {
        setIsLoading(true);
        setGeneratedTextStream("");
        const response = await fetch(`${BASE_URL}/getTextStream`);
        if (response.body) {
            const reader = response.body.getReader();
            let decoder = new TextDecoder();
    
            reader.read().then(function processText({ done, value }) {
                if (done) {
                    setIsLoading(false);
                    return;
                }
                let decodedText = decoder.decode(value);
                setGeneratedTextStream(prevText => prevText + decodedText);
                return reader.read().then(processText);
            });
        } else {
            console.error('Response body is null');
            setIsLoading(false);
        }
    };
  
    return (
    <div>
      <h1>OpenAI TextStream</h1>
      <p>{generatedTextStream}</p>
      <button disabled={isLoading} onClick={generateTextStream}>
        Generate Text
      </button>
    </div>
  );
};

export default GenerateTextStream;
