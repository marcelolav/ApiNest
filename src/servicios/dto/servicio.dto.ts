import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, MinLength } from 'class-validator';

export class crearServicioDTO {
  @ApiProperty()
  @IsString()
  @MinLength(5)
  cliente: string;
  @ApiProperty()
  @IsString()
  telefono: string;
  @ApiProperty()
  @IsDate()
  fechaingreso: Date;
  @ApiProperty()
  @IsString()
  articulo: string;
  @ApiProperty()
  @IsString()
  falla: string;
  @ApiProperty()
  @IsString()
  observaciones: string;
  @ApiProperty()
  @IsDate()
  fechasalida: Date;
  @ApiProperty()
  @IsNumber()
  precioreparacion: number;
  @ApiProperty()
  @IsNumber()
  reparado: number;
}
