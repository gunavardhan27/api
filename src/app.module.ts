import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { IssueModule } from './issue/issue.module';
import mongoose from 'mongoose';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true, // This makes the config available globally across the app
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    IssueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    mongoose.connection.on('connected', () => {
      console.log('connected');
    });
    mongoose.connection.on('error', (err) => {
      console.log('mongo connection failed', err);
    });
  }
}
