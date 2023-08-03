import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './proveedor.entity';
import { Repository } from 'typeorm';
import { crearProveedorDTO } from './dto/proveedor.dto';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedor) private proveedorRepo: Repository<Proveedor>,
  ) {}

  async obtenerProveedores() {
    return await this.proveedorRepo.find();
  }

  async obtenerProveedor(idproveedores: number) {
    const proveedorEncontrado = await this.proveedorRepo.findOne({
      where: {
        idproveedores,
      },
    });
    if (!proveedorEncontrado) {
      return new HttpException('Proveedor no encontrado', HttpStatus.NOT_FOUND);
    }
    return proveedorEncontrado;
  }

  async crearProveedor(proveedor: crearProveedorDTO) {
    return await this.proveedorRepo.save(proveedor);
  }

  async eliminarProveedor(idproveedores: number) {
    const result = await this.proveedorRepo.delete({
      idproveedores,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El proveedor que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarProveedor(
    idproveedores: number,
    proveedorActualizado: crearProveedorDTO,
  ) {
    const proveedorEncontrado = await this.proveedorRepo.findOne({
      where: { idproveedores },
    });
    if (!proveedorEncontrado) {
      return new HttpException('El proveedor no existe', HttpStatus.NOT_FOUND);
    }
    const actProveedor = Object.assign(
      proveedorEncontrado,
      proveedorActualizado,
    );

    return this.proveedorRepo.save(actProveedor);
  }
}
