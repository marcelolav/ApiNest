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
import { VentasDetalleService } from './ventas-detalle.service';
import { crearVentaDetalleDTO } from './dto/ventasdetalle.dto';
@ApiTags('Ventas-Detalle')
@Controller('ventas-detalle')
export class VentasDetalleController {
  constructor(private ventasDetalleService: VentasDetalleService) {}

  @Get()
  obtenerVentasDetalle() {
    return this.ventasDetalleService.obtenerVentasDetalle();
  }

  @Get(':id')
  obteneVentaDetalle(@Param('id', ParseIntPipe) idventasdetalle: number) {
    return this.ventasDetalleService.obtenerVentaDetalle(idventasdetalle);
  }
  @Get('comprobante/:id')
  obtenerVentaDetalleComprobante(
    @Param('id', ParseIntPipe) comprobante_detalle: number,
  ) {
    return this.ventasDetalleService.obtenerVentaDetalleComprobante(
      comprobante_detalle,
    );
  }
  @Post()
  creaVentaDetalle(@Body() nuevaVentaDetalle: crearVentaDetalleDTO) {
    return this.ventasDetalleService.crearVentaDetalle(nuevaVentaDetalle);
  }

  @Delete(':id')
  eliminaVentaDetalle(@Param('id', ParseIntPipe) idventasdetalle: number) {
    this.ventasDetalleService.eliminarVentaDetalle(idventasdetalle);
  }

  @Patch(':id')
  actualizaVentaDetalle(
    @Param('id', ParseIntPipe) idventasdetalle: number,
    @Body() ventaDetalleActualizado: crearVentaDetalleDTO,
  ) {
    return this.ventasDetalleService.actualizarVentaDetalle(
      idventasdetalle,
      ventaDetalleActualizado,
    );
  }
}
