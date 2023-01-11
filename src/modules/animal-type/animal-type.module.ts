import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnimalTypeService } from './animal-type.service';
import { AnimalTypeController } from './animal-type.controller';
import { AnimalTypeSchema } from './schema/animal-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AnimalType', schema: AnimalTypeSchema },
    ]),
  ],
  providers: [AnimalTypeService],
  controllers: [AnimalTypeController],
})
export class AnimalTypeModule {}
