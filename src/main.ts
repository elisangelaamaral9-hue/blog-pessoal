import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe());

  // Configurando o CORS
  app.enableCors({
    origin: 'http://localhost:5173/', // Substitua pelo domínio permitido
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization, Accept, Referer, sec-ch-ua, sec-ch-ua-mobile, sec-ch-ua-platform, user-agent', // Cabeçalhos permitidos
    });

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();