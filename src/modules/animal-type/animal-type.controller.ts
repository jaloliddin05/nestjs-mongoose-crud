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
  async getOneArticles(@Param() params) {
    return await this.animalTypeService.getOneAnimalType(params.id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createArticle(@Body() createArticleDto: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(createArticleDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateWithAllParams(
    @Param('id') id: string,
    @Body() createArticleDto: UpdateAnimalTypeDto,
  ) {
    return await this.animalTypeService.updateAnimalType(id, createArticleDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteOneArticle(@Param('id') id: string) {
    return await this.animalTypeService.deleteAnimalType(id);
  }
}
