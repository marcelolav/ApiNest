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
import { ComprasDetalleService } from './compras-detalle.service';
import { crearCompraDetalleDTO } from './dto/comprasdetalle.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Compras-Detalle')
@Controller('compras-detalle')
export class ComprasDetalleController {
  constructor(private comprasDetalleService: ComprasDetalleService) {}

  @Get()
  obtenerComprasDetalle() {
    return this.comprasDetalleService.obtenerComprasDetalle();
  }

  @Get(':id')
  obteneCompraDetalle(@Param('id', ParseIntPipe) idcomprasdetalle: number) {
    return this.comprasDetalleService.obtenerCompraDetalle(idcomprasdetalle);
  }

  @Get('comprobante/:id')
  obtenerCompraDetalleComprobante(
    @Param('id', ParseIntPipe) comprobante_detalle: number,
  ) {
    return this.comprasDetalleService.obtenerCompraDetalleComprobante(
      comprobante_detalle,
    );
  }
  @Post()
  creaCompraDetalle(@Body() nuevaCompraDetalle: crearCompraDetalleDTO) {
    return this.comprasDetalleService.crearCompraDetalle(nuevaCompraDetalle);
  }

  @Delete(':id')
  eliminaCompraDetalle(@Param('id', ParseIntPipe) idcomprasdetalle: number) {
    this.comprasDetalleService.eliminarCompraDetalle(idcomprasdetalle);
  }

  @Patch(':id')
  actualizaCompraDetalle(
    @Param('id', ParseIntPipe) idcomprasdetalle: number,
    @Body() compraDetalleActualizado: crearCompraDetalleDTO,
  ) {
    return this.comprasDetalleService.actualizarCompraDetalle(
      idcomprasdetalle,
      compraDetalleActualizado,
    );
  }
}
