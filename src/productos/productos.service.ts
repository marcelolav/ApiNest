import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { crearProductoDTO } from './dto/producto.dto';
@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) private productoRepo: Repository<Producto>,
  ) {}

  async crearProducto(producto: crearProductoDTO) {
    const existeProducto = await this.productoRepo.findOne({
      where: {
        codigobarra: producto.codigobarra,
        nombreproducto: producto.nombreproducto,
      },
    });
    if (existeProducto) {
      return new HttpException('El producto ya existe', HttpStatus.CONFLICT);
    }
    const nuevoProducto = this.productoRepo.create(producto);
    return this.productoRepo.save(nuevoProducto);
  }

  obtenerProductos() {
    return this.productoRepo.find();
  }

  async obtenerProductoId(idproductos: number) {
    const productoEncontrado = await this.productoRepo.findOne({
      where: {
        idproductos,
      },
    });
    if (!productoEncontrado) {
      return new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return productoEncontrado;
  }

  obtenerProductoCB(codigobarra: string) {
    return this.productoRepo.findOne({
      where: {
        codigobarra,
      },
    });
  }

  async eliminarProducto(idproductos: number) {
    const productoEncontrado = this.productoRepo.findOne({
      where: { idproductos },
    });
    if (!productoEncontrado) {
      return new HttpException(
        'El producto que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }

    this.productoRepo.delete({ idproductos });
  }

  actualizarProducto(
    idproductos: number,
    productoActualizado: crearProductoDTO,
  ) {
    return this.productoRepo.update({ idproductos }, productoActualizado);
  }
}
