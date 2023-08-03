import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ServiciosService } from './servicios.service';
import { crearServicioDTO } from './dto/servicio.dto';
@ApiTags('Servicios')
@Controller('servicios')
export class ServiciosController {
  constructor(private serviciosService: ServiciosService) {}

  @Get()
  obtenerServicios() {
    return this.serviciosService.obtenerServicios();
  }

  @Get(':id')
  obtenerServicio(@Param('id', ParseIntPipe) idservicios: number) {
    return this.serviciosService.obtenerServicio(idservicios);
  }

  @Post()
  crearCliente(@Body() nuevoServicio: crearServicioDTO) {
    return this.serviciosService.crearServicio(nuevoServicio);
  }

  @Delete(':id')
  eliminarCliente(@Param('id', ParseIntPipe) idservicios: number) {
    this.serviciosService.eliminarServicio(idservicios);
  }

  @Patch(':id')
  actualizarServicio(
    @Param('id', ParseIntPipe) idservicios: number,
    @Body() servicioActualizado: crearServicioDTO,
  ) {
    return this.serviciosService.actualizarServicio(
      idservicios,
      servicioActualizado,
    );
  }
}
