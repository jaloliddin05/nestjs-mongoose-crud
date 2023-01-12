import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { AnimalService } from './animal.service';
import { CreateAnimalDto, UpdateAnimal } from './dto';

@Controller('animals')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllArticle() {
    return await this.animalService.getAllAnimals();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getOneArticles(@Param('id') id: string) {
    return await this.animalService.getOneAnimal(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createArticle(@Body() data: CreateAnimalDto) {
    return await this.animalService.createAnimal(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateWithAllParams(
    @Param('id') id: string,
    @Body() data: UpdateAnimal,
  ) {
    return await this.animalService.updateAnimal(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteOneArticle(@Param('id') id: string) {
    return await this.animalService.deleteAnimal(id);
  }
}
