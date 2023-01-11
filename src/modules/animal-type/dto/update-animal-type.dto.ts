import { IsOptional, IsString } from 'class-validator';

class UpdateAnimalTypeDto {
  @IsOptional()
  @IsString()
  readonly type: string;
}

export default UpdateAnimalTypeDto;
