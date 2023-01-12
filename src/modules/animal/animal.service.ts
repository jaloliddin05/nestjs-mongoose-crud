import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Animal } from './interface/animal.interface';
import { CreateAnimalDto, UpdateAnimal } from './dto';

@Injectable()
export class AnimalService {
  constructor(
    @InjectModel('Animal')
    private readonly animalModel: Model<Animal>,
  ) {}

  async createAnimal(data: CreateAnimalDto): Promise<Animal> {
    const animal = new this.animalModel(data);
    await animal.save();
    return animal;
  }

  async getAllAnimals(): Promise<any> {
    return await this.animalModel
      .find({})
      .populate({ path: 'type', select: 'type' });
  }

  async getOneAnimal(id: string): Promise<Animal> {
    return await (
      await this.animalModel.findById(id)
    ).populate({ path: 'type', select: 'type _id' });
  }

  async updateAnimal(id: string, updateArticleDto: UpdateAnimal) {
    return await this.animalModel.updateOne({ _id: id }, updateArticleDto);
  }

  async deleteAnimal(id: string): Promise<Animal> {
    return await this.animalModel.findByIdAndDelete(id);
  }
}
