import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class crearRubroDTO {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  nombrerubro: string;
}
