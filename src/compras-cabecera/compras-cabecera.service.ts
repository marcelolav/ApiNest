import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComprasCabecera } from './compras-cabecera.entity';
import { crearCompraCabeceraDTO } from './dto/comprascabecera.dto';

@Injectable()
export class ComprasCabeceraService {
  constructor(
    @InjectRepository(ComprasCabecera)
    private comprasCabeceraRepo: Repository<ComprasCabecera>,
  ) {}

  async crearCompraCabecera(comprascabecera: crearCompraCabeceraDTO) {
    return await this.comprasCabeceraRepo.save(comprascabecera);
  }

  async obtenerComprasCabecera() {
    return await this.comprasCabeceraRepo.find();
  }

  async obtenerCompraCabecera(idcomprascabecera: number) {
    const compraCabeceraEncontrada = await this.comprasCabeceraRepo.findOne({
      where: { idcomprascabecera },
    });

    if (!compraCabeceraEncontrada) {
      return new HttpException(
        'Cabecera de Compra no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return compraCabeceraEncontrada;
  }

  async eliminarCompraCabecera(idcomprascabecera: number) {
    const result = await this.comprasCabeceraRepo.delete({
      idcomprascabecera,
    });
    if (result.affected === 0) {
      return new HttpException(
        'La cabecera de compra que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarCabeceraCompra(
    idcomprascabecera: number,
    compraCabecera: crearCompraCabeceraDTO,
  ) {
    const compraCabeceraEncontrada = await this.comprasCabeceraRepo.findOne({
      where: { idcomprascabecera },
    });
    if (!compraCabeceraEncontrada) {
      return new HttpException(
        'La cabecera de compra no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    const actCompraCabecera = Object.assign(
      compraCabeceraEncontrada,
      compraCabecera,
    );

    return this.comprasCabeceraRepo.save(actCompraCabecera);
  }
}
