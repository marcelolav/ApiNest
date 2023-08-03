import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { crearVentaDetalleDTO } from './dto/ventasdetalle.dto';
import { VentasDetalle } from './ventas-detalle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VentasDetalleService {
  constructor(
    @InjectRepository(VentasDetalle)
    private ventasDetalleRepo: Repository<VentasDetalle>,
  ) {}

  async crearVentaDetalle(ventaDetalle: crearVentaDetalleDTO) {
    return await this.ventasDetalleRepo.save(ventaDetalle);
  }

  async obtenerVentasDetalle() {
    return await this.ventasDetalleRepo.find();
  }

  async obtenerVentaDetalle(idventasdetalle: number) {
    const ventaDetalleEncontrado = await this.ventasDetalleRepo.findOne({
      where: { idventasdetalle },
    });

    if (!ventaDetalleEncontrado) {
      return new HttpException(
        'Detalle de venta no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return ventaDetalleEncontrado;
  }

  async obtenerVentaDetalleComprobante(comprobante_detalle: number) {
    const ventaDetalleEncontrado = await this.ventasDetalleRepo.find({
      where: { comprobante_detalle },
    });
    if (!ventaDetalleEncontrado) {
      return new HttpException(
        'Detalle de compra no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return ventaDetalleEncontrado;
  }
  async eliminarVentaDetalle(idventasdetalle: number) {
    const result = await this.ventasDetalleRepo.delete({
      idventasdetalle,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El detalle de venta que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarVentaDetalle(
    idventasdetalle: number,
    ventasdetalleActualizado: crearVentaDetalleDTO,
  ) {
    const ventaDetalleEncontrado = await this.ventasDetalleRepo.findOne({
      where: { idventasdetalle },
    });
    if (!ventaDetalleEncontrado) {
      return new HttpException(
        'El detalle de venta no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    const actVentaDetalle = Object.assign(
      ventaDetalleEncontrado,
      ventasdetalleActualizado,
    );

    return this.ventasDetalleRepo.save(actVentaDetalle);
  }
}
