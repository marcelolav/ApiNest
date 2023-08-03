import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { VentasCabecera } from './ventas-cabecera.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { crearVentaCabeceraDTO } from './dto/ventascabecera.dto';

@Injectable()
export class VentasCabeceraService {
  constructor(
    @InjectRepository(VentasCabecera)
    private ventasCabeceraRepo: Repository<VentasCabecera>,
  ) {}

  async crearVentaCabecera(ventascabecera: crearVentaCabeceraDTO) {
    return await this.ventasCabeceraRepo.save(ventascabecera);
  }

  async obtenerVentasCabecera() {
    return await this.ventasCabeceraRepo.find();
  }

  async obtenerVentaCabecera(idventascabecera: number) {
    const ventaCabeceraEncontrada = await this.ventasCabeceraRepo.findOne({
      where: { idventascabecera },
    });

    if (!ventaCabeceraEncontrada) {
      return new HttpException(
        'Cabecera de Venta no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return ventaCabeceraEncontrada;
  }

  async eliminarVentaCabecera(idventascabecera: number) {
    const result = await this.ventasCabeceraRepo.delete({
      idventascabecera,
    });
    if (result.affected === 0) {
      return new HttpException(
        'La cabecera de venta que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarCabeceraVenta(
    idventascabecera: number,
    ventasCabecera: crearVentaCabeceraDTO,
  ) {
    const ventaCabeceraEncontrada = await this.ventasCabeceraRepo.findOne({
      where: { idventascabecera },
    });
    if (!ventaCabeceraEncontrada) {
      return new HttpException(
        'La cabecera de venta no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    const actVentaCabecera = Object.assign(
      ventaCabeceraEncontrada,
      ventasCabecera,
    );

    return this.ventasCabeceraRepo.save(actVentaCabecera);
  }
}
