import { useEffect, useState } from 'react';
import styles from './ModelFusionTest.module.css';
import axios from 'axios';
import {BASE_URL} from '../config'

const ModelFusionTest = () => {
    const [generatedText, setGeneratedText] = useState("");
    const [generatedTextStream, setGeneratedTextStream] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const generateText = async () => {
        setIsLoading(true);
        setGeneratedText("");
        const response = await axios.get("/getText");
        setGeneratedText(response.data);
        setIsLoading(false);
    };

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
        <div className={styles.container}>
            <h1>OpenAI Text</h1>
            <p>{generatedText}</p>
            <button disabled={isLoading} onClick={generateText}>Generate Text</button>
            <h1>OpenAI Text Stream</h1>
            <p>{generatedTextStream}</p>
            <button disabled={isLoading} onClick={generateTextStream}>Generate Text Stream</button>
        </div>
    );
}

export default ModelFusionTest;