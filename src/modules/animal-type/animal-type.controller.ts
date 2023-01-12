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

import { AnimalTypeService } from './animal-type.service';
import { CreateAnimalTypeDto, UpdateAnimalTypeDto } from './dto';

@Controller('animal-type')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAllArticle() {
    return await this.animalTypeService.getAllAnimalTypes();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getOneArticles(@Param('id') id: string) {
    return await this.animalTypeService.getOneAnimalType(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createArticle(@Body() data: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(data);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateWithAllParams(
    @Param('id') id: string,
    @Body() data: UpdateAnimalTypeDto,
  ) {
    return await this.animalTypeService.updateAnimalType(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteOneArticle(@Param('id') id: string) {
    return await this.animalTypeService.deleteAnimalType(id);
  }
}
