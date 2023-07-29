import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from '../../services/productos';
import { Producto } from 'src/class/producto.entity/producto.entity';
import { ProductosController } from 'src/controllers/productos/productos.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  providers: [ProductosService],
  controllers: [ProductosController],
})
export class ProductosModule {}
