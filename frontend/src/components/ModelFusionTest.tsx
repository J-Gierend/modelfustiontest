import { useEffect, useState } from 'react';
import styles from './ModelFusionTest.module.css';
import { OpenAICompletionModel, generateText } from 'modelfusion';

const ModelFusionTest = () => {
    const [generatedText, setGeneratedText] = useState("");
    const prompt = "Write a a short story about blue apples."

    useEffect(() => {
        const generateStory = async () => {
            const text = await generateText(
                new OpenAICompletionModel({
                    model: "gpt-3.5-turbo-instruct",
                }),
                "Write a short story about a robot learning to love:\n\n"
            );
            setGeneratedText(text);
        };
        generateStory();
      }, []);
    return (<div className={styles.container}>{generatedText}</div>);
}
 
export default ModelFusionTest;