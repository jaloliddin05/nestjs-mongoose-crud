import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AnimalType } from './interface/animal-type.interface';
import { CreateAnimalTypeDto, UpdateAnimalTypeDto } from './dto';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel('AnimalType')
    private readonly animalTypeModel: Model<AnimalType>,
  ) {}

  async createAnimalType(
    createArticleDto: CreateAnimalTypeDto,
  ): Promise<AnimalType> {
    const article = new this.animalTypeModel(createArticleDto);
    await article.save();
    return article;
  }

  async getAllAnimalTypes(): Promise<any> {
    return await this.animalTypeModel.find({});
  }

  async getOneAnimalType(id: string): Promise<AnimalType> {
    return await this.animalTypeModel.findById(id);
  }

  async updateAnimalType(id: string, updateArticleDto: UpdateAnimalTypeDto) {
    return await this.animalTypeModel.updateOne({ _id: id }, updateArticleDto);
  }

  async deleteAnimalType(id: string): Promise<AnimalType> {
    return await this.animalTypeModel.findByIdAndDelete(id);
  }
}
