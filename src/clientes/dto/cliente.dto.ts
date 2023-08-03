import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class crearClienteDTO {
  @ApiProperty()
  @IsString()
  @MinLength(5)
  nombrecliente: string;
  @ApiProperty()
  @IsString()
  @MinLength(8)
  telefono: string;
  @ApiProperty()
  @IsString()
  direccion: string;
  @ApiProperty()
  @IsString()
  cuit: string;
  @ApiProperty()
  @IsString()
  observaciones: string;
}
