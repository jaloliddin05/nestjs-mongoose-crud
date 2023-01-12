import { IsNotEmpty, IsString } from 'class-validator';

class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly type: string;
}

export default CreateAnimalDto;
