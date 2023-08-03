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
import { ComprasCabeceraService } from './compras-cabecera.service';
import { crearCompraCabeceraDTO } from './dto/comprascabecera.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Compras-Cabecera')
@Controller('compras-cabecera')
export class ComprasCabeceraController {
  constructor(private comprasCabeceraService: ComprasCabeceraService) {}

  @Get()
  obtenerComprasCabecera() {
    return this.comprasCabeceraService.obtenerComprasCabecera();
  }

  @Get(':id')
  obtenerCompraCabecera(@Param('id', ParseIntPipe) idcomprascabecera: number) {
    return this.comprasCabeceraService.obtenerCompraCabecera(idcomprascabecera);
  }

  @Post()
  crearCompraCabecera(@Body() nuevaCompraCabecera: crearCompraCabeceraDTO) {
    return this.comprasCabeceraService.crearCompraCabecera(nuevaCompraCabecera);
  }

  @Delete(':id')
  eliminarCompraCabecera(@Param('id', ParseIntPipe) idcomprascabecera: number) {
    this.comprasCabeceraService.eliminarCompraCabecera(idcomprascabecera);
  }

  @Patch(':id')
  actualizarCompraCabecera(
    @Param('id', ParseIntPipe) idcomprascabecera: number,
    @Body() comprasCabeceraActualizado: crearCompraCabeceraDTO,
  ) {
    return this.comprasCabeceraService.actualizarCabeceraCompra(
      idcomprascabecera,
      comprasCabeceraActualizado,
    );
  }
}
