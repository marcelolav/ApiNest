import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './producto.entity';
import { Productolistaprecios } from './producto.listaprecios.entity';
import { Productolistafaltantes } from './producto.listafaltantes.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producto,
      Productolistaprecios,
      Productolistafaltantes,
    ]),
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
