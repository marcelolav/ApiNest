import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComprasDetalle } from './compras-detalle.entity';
import { crearCompraDetalleDTO } from './dto/comprasdetalle.dto';

@Injectable()
export class ComprasDetalleService {
  constructor(
    @InjectRepository(ComprasDetalle)
    private comprasDetalleRepo: Repository<ComprasDetalle>,
  ) {}

  async crearCompraDetalle(compraDetalle: crearCompraDetalleDTO) {
    return await this.comprasDetalleRepo.save(compraDetalle);
  }

  async obtenerComprasDetalle() {
    return await this.comprasDetalleRepo.find();
  }

  async obtenerCompraDetalle(idcomprasdetalle: number) {
    const compraDetalleEncontrado = await this.comprasDetalleRepo.findOne({
      where: { idcomprasdetalle },
    });

    if (!compraDetalleEncontrado) {
      return new HttpException(
        'Detalle de compra no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return compraDetalleEncontrado;
  }

  async obtenerCompraDetalleComprobante(comprobante_detalle: number) {
    const compraDetalleEncontrado = await this.comprasDetalleRepo.find({
      where: { comprobante_detalle },
    });
    if (!compraDetalleEncontrado) {
      return new HttpException(
        'Detalle de compra no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return compraDetalleEncontrado;
  }
  async eliminarCompraDetalle(idcomprasdetalle: number) {
    const result = await this.comprasDetalleRepo.delete({
      idcomprasdetalle,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El detalle de compra que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarCompraDetalle(
    idcomprasdetalle: number,
    comprasdetalleActualizado: crearCompraDetalleDTO,
  ) {
    const compraDetalleEncontrado = await this.comprasDetalleRepo.findOne({
      where: { idcomprasdetalle },
    });
    if (!compraDetalleEncontrado) {
      return new HttpException(
        'El detalle de compra no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    const actCompraDetalle = Object.assign(
      compraDetalleEncontrado,
      comprasdetalleActualizado,
    );

    return this.comprasDetalleRepo.save(actCompraDetalle);
  }
}
