import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger 적용
  const config = new DocumentBuilder()
    .setTitle('Web Yahtzee Dice')
    .setDescription('Web Yahtzee Dice API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  // 전역 파이프 설정
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    forbidNonWhitelisted: true,
    transform: true
  }));
  
  await app.listen(3000);
}
bootstrap();
