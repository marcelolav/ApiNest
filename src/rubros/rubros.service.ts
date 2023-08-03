import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rubro } from './rubro.entity';
import { Repository } from 'typeorm';
import { crearRubroDTO } from './dto/rubro.dto';

@Injectable()
export class RubrosService {
  constructor(@InjectRepository(Rubro) private rubrosRepo: Repository<Rubro>) {}

  async crearRubro(rubro: crearRubroDTO) {
    return await this.rubrosRepo.save(rubro);
  }

  async obtenerRubros() {
    return await this.rubrosRepo.find();
  }

  async obtenerRubro(idrubros: number) {
    const rubroEncontrado = await this.rubrosRepo.findOne({
      where: { idrubros },
    });

    if (!rubroEncontrado) {
      return new HttpException('Rubro no encontrado', HttpStatus.NOT_FOUND);
    }

    return rubroEncontrado;
  }

  async eliminarRubro(idrubros: number) {
    const result = await this.rubrosRepo.delete({
      idrubros,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El rubro que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarRubro(idrubros: number, rubroActualizado: crearRubroDTO) {
    const rubroEncontrado = await this.rubrosRepo.findOne({
      where: { idrubros },
    });
    if (!rubroEncontrado) {
      return new HttpException('El rubro no existe', HttpStatus.NOT_FOUND);
    }
    const actRubro = Object.assign(rubroEncontrado, rubroActualizado);

    return this.rubrosRepo.save(actRubro);
  }
}
