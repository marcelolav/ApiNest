import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuxproductosService } from './auxproductos.service';
import { actualizarAuxProductoDTO } from './dto/actualizarauxproducto.dto';
import { crearAuxproductoDTO } from './dto/auxproducto.dto';

@ApiTags('Auxiliar Productos')
@Controller('auxproductos')
export class AuxproductosController {
  constructor(private auxprodservice: AuxproductosService) {}

  @Get()
  obtenerTodos() {
    return this.auxprodservice.obtenerAuxProductos();
  }

  @Get(':id')
  obtenerProductoID(@Param('id', ParseIntPipe) idproductos: number) {
    return this.auxprodservice.obtenerAuxProducto(idproductos);
  }

  @Post()
  crearAuxProducto(@Body() nuevoaux: crearAuxproductoDTO) {
    return this.auxprodservice.crearAuxProducto(nuevoaux);
  }
  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) idproductos: number,
    @Body() productoActualizado: actualizarAuxProductoDTO,
  ) {
    return this.auxprodservice.actualizarAuxProducto(
      idproductos,
      productoActualizado,
    );
  }
}
