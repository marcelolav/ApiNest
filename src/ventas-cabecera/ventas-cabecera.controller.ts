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
import { VentasCabeceraService } from './ventas-cabecera.service';
import { crearVentaCabeceraDTO } from './dto/ventascabecera.dto';
@ApiTags('Ventas-Cabecera')
@Controller('ventas-cabecera')
export class VentasCabeceraController {
  constructor(private ventasCabeceraService: VentasCabeceraService) {}

  @Get()
  obtenerVentasCabecera() {
    return this.ventasCabeceraService.obtenerVentasCabecera();
  }

  @Get(':id')
  obtenerVentaCabecera(@Param('id', ParseIntPipe) idventascabecera: number) {
    return this.ventasCabeceraService.obtenerVentaCabecera(idventascabecera);
  }

  @Post()
  crearVentaCabecera(@Body() nuevaVentaCabecera: crearVentaCabeceraDTO) {
    return this.ventasCabeceraService.crearVentaCabecera(nuevaVentaCabecera);
  }

  @Delete(':id')
  eliminarVentaCabecera(@Param('id', ParseIntPipe) idventascabecera: number) {
    this.ventasCabeceraService.eliminarVentaCabecera(idventascabecera);
  }

  @Patch(':id')
  actualizarCompraCabecera(
    @Param('id', ParseIntPipe) idcomprascabecera: number,
    @Body() ventasCabeceraActualizado: crearVentaCabeceraDTO,
  ) {
    return this.ventasCabeceraService.actualizarCabeceraVenta(
      idcomprascabecera,
      ventasCabeceraActualizado,
    );
  }
}
