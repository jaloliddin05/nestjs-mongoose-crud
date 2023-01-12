import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import configuration from './config';
import { AnimalTypeModule } from './modules/animal-type/animal-type.module';
import { AnimalModule } from './modules/animal/animal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    ScheduleModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI),
    AnimalTypeModule,
    AnimalModule,
  ],
})
export class AppModule {}
