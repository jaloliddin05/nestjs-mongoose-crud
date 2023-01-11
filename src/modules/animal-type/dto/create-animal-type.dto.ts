import { IsNotEmpty, IsString } from 'class-validator';

class CreateAnimalTypeDto {
  @IsNotEmpty()
  @IsString()
  readonly type: string;
}

export default CreateAnimalTypeDto;
