import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { RubrosService } from './rubros.service';
import { crearRubroDTO } from './dto/rubro.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Rubros')
@Controller('rubros')
export class RubrosController {
  constructor(private rubrosService: RubrosService) {}

  @Get()
  obtenerRubros() {
    return this.rubrosService.obtenerRubros();
  }

  @Get(':id')
  obtenerRubro(@Param('id', ParseIntPipe) idrubros: number) {
    return this.rubrosService.obtenerRubro(idrubros);
  }

  @Post()
  crearProducto(@Body() nuevoRubro: crearRubroDTO) {
    return this.rubrosService.crearRubro(nuevoRubro);
  }

  @Delete(':id')
  eliminarRubro(@Param('id', ParseIntPipe) idrubros: number) {
    this.rubrosService.eliminarRubro(idrubros);
  }

  @Patch(':id')
  actualizarRubro(
    @Param('id', ParseIntPipe) idrubros: number,
    @Body() rubroActualizado: crearRubroDTO,
  ) {
    return this.rubrosService.actualizarRubro(idrubros, rubroActualizado);
  }
}
