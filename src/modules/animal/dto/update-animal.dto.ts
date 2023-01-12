import { IsOptional, IsString } from 'class-validator';

class UpdateAnimal {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly type: string;
}

export default UpdateAnimal;
