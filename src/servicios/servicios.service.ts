import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './servicio.entity';
import { Repository } from 'typeorm';
import { crearServicioDTO } from './dto/servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio) private servicioRepo: Repository<Servicio>,
  ) {}

  async obtenerServicios() {
    return await this.servicioRepo.find();
  }

  async obtenerServicio(idservicios: number) {
    const servicioEncontrado = await this.servicioRepo.findOne({
      where: {
        idservicios,
      },
    });
    if (!servicioEncontrado) {
      return new HttpException('Servicio no encontrado', HttpStatus.NOT_FOUND);
    }
    return servicioEncontrado;
  }

  async crearServicio(servicio: crearServicioDTO) {
    return await this.servicioRepo.save(servicio);
  }

  async eliminarServicio(idservicios: number) {
    const result = await this.servicioRepo.delete({
      idservicios,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El servicio que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarServicio(
    idservicios: number,
    servicioActualizado: crearServicioDTO,
  ) {
    const servicioEncontrado = await this.servicioRepo.findOne({
      where: { idservicios },
    });
    if (!servicioEncontrado) {
      return new HttpException('El servicio no existe', HttpStatus.NOT_FOUND);
    }
    const actServicio = Object.assign(servicioEncontrado, servicioActualizado);

    return this.servicioRepo.save(actServicio);
  }
}
