import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Readable } from 'stream';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('getText')
  async getText(): Promise<string> {
    return this.appService.getText();
  }

  @Get('getTextStream')
  async getTextStream(@Res() res: any): Promise<void> {
    res.setHeader('Content-Type', 'text/plain');
    const stream = await this.appService.getTextStream();
    stream.on('data', (chunk) => {
      res.write(`${chunk}`);
    });
    stream.on('end', () => res.end());
  }

}
