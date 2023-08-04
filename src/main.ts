import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe()
  )
  await app.listen(3000);
}
bootstrap();

// import { Module, Controller, Get } from "@nestjs/common";          //tools nest provide us to make module and controller
// import { NestFactory } from "@nestjs/core";

// @Controller()      //tells that we are trying to create a class that is going to serve as controller(class going to handle incoming and outgoing requests)
// class AppController{
//   @Get()
//   getRootRoute(){
//     return 'hi there!'
//   }
// }

// @Module({
//   controllers:[AppController]
// })
// class AppModule{

// }

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule)        //instance of our nest app
//   await app.listen(3000);

// }
// bootstrap()