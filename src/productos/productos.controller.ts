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
import { crearProductoDTO } from './dto/producto.dto';
import { ProductosService } from './productos.service';
//import { Producto } from './producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private productoService: ProductosService) {}

  @Get()
  obtenerProductos() {
    return this.productoService.obtenerProductos();
  }
  @Get(':id')
  obtenerProductoID(@Param('id', ParseIntPipe) idproductos: number) {
    return this.productoService.obtenerProductoId(idproductos);
  }

  @Get('/cb/:id')
  obtenerProductoCB(@Param('id') codigobarra: string) {
    return this.productoService.obtenerProductoCB(codigobarra);
  }
  @Post()
  crearProducto(@Body() nuevoProducto: crearProductoDTO) {
    return this.productoService.crearProducto(nuevoProducto);
  }

  @Delete(':id')
  eliminarProducto(@Param('id', ParseIntPipe) idproductos: number) {
    this.productoService.eliminarProducto(idproductos);
  }

  @Patch(':id')
  actualizarProducto(
    @Param('id', ParseIntPipe) idproductos: number,
    @Body() productoActualizado: crearProductoDTO,
  ) {
    return this.productoService.actualizarProducto(
      idproductos,
      productoActualizado,
    );
  }
}
