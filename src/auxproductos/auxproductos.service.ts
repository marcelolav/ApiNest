import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productos_cv } from './auxproductos_cv.entity';
import { Auxproducto } from './auxproducto.entity';
import { actualizarAuxProductoDTO } from './dto/actualizarauxproducto.dto';
import { crearAuxproductoDTO } from './dto/auxproducto.dto';

@Injectable()
export class AuxproductosService {
  constructor(
    @InjectRepository(Auxproducto)
    private auxproductos: Repository<Auxproducto>,
    @InjectRepository(Productos_cv)
    private auxproductoscv: Repository<Productos_cv>,
  ) {}

  async obtenerAuxProductos() {
    return await this.auxproductoscv.find();
  }

  async obtenerAuxProducto(idproductos: number) {
    const productoEncontrado = await this.auxproductos.findOne({
      where: { idproductos },
    });
    if (!productoEncontrado) {
      return new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return productoEncontrado;
  }

  async actualizarAuxProducto(
    idproductos: number,
    productoActualizado: actualizarAuxProductoDTO,
  ) {
    const productoEncontrado = await this.auxproductos.findOne({
      where: { idproductos },
    });
    if (!productoEncontrado) {
      return new HttpException('El producto no existe', HttpStatus.NOT_FOUND);
    }
    const actProducto = Object.assign(productoEncontrado, productoActualizado);

    return this.auxproductos.save(actProducto);
  }

  async crearAuxProducto(auxProducto: crearAuxproductoDTO) {
    const idproductos = auxProducto.idproductos;
    const idproductoencontrado = await this.auxproductos.findOne({
      where: {
        idproductos,
      },
    });
    if (idproductoencontrado) {
      return new HttpException(
        'Ya existe el producto y no puede estar duplicado en la tabla auxiliar',
        HttpStatus.CONFLICT,
      );
    }
    return await this.auxproductos.save(auxProducto);
  }
}
