import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { crearProductoDTO } from './dto/producto.dto';
//import { Rubro } from './rubro.entity';
// import { validate } from 'class-validator';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) private productoRepo: Repository<Producto>,
  ) {}

  async crearProducto(producto: crearProductoDTO) {
    const codigobarra = producto.codigobarra;
    const nombreproducto = producto.nombreproducto;
    const barcodeEncontrado = await this.productoRepo.findOne({
      where: {
        codigobarra,
      },
    });
    const nombreEncontrado = await this.productoRepo.findOne({
      where: {
        nombreproducto,
      },
    });
    if (barcodeEncontrado || nombreEncontrado) {
      return new HttpException(
        'Nombre de Producto Existente o bien Código de Barras Duplicado',
        HttpStatus.CONFLICT,
      );
    }
    return await this.productoRepo.save(producto);
  }

  async obtenerProductos() {
    return await this.productoRepo.find();
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

  async obtenerProductoCB(codigobarra: string) {
    const productoEncontrado = await this.productoRepo.findOne({
      where: {
        codigobarra,
      },
    });
    if (!productoEncontrado) {
      return new HttpException('Producto No encontrado', HttpStatus.NOT_FOUND);
    }
    return productoEncontrado;
  }

  async eliminarProducto(idproductos: number) {
    const result = await this.productoRepo.delete({
      idproductos,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El producto que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarProducto(
    idproductos: number,
    productoActualizado: crearProductoDTO,
  ) {
    const productoEncontrado = await this.productoRepo.findOne({
      where: { idproductos },
    });
    if (!productoEncontrado) {
      return new HttpException('El producto no existe', HttpStatus.NOT_FOUND);
    }
    const actProducto = Object.assign(productoEncontrado, productoActualizado);

    return this.productoRepo.save(actProducto);
  }
}
