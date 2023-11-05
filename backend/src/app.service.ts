import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { generateText, OpenAICompletionModel, streamText } from 'modelfusion';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  async getText(): Promise<string> {
    const text = await generateText(
      new OpenAICompletionModel({
        model: "gpt-3.5-turbo-instruct",
        maxCompletionTokens: 200,
      }),
      "Write a short story about blue apples:\n\n"
    );
    return text;
  }
  
  async getTextStream(): Promise<Readable> {
    const textStream = await streamText(
      new OpenAICompletionModel({
        model: "gpt-3.5-turbo-instruct",
        maxCompletionTokens: 200,
      }),
      "Write a short story about blue apples:\n\n"
    );
    return Readable.from(textStream);
  }
}
