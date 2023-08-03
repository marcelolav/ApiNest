import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';
import { crearClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private clienteRepo: Repository<Cliente>,
  ) {}

  async obtenerClientes() {
    return await this.clienteRepo.find();
  }

  async obtenerCliente(idclientes: number) {
    const clienteEncontrado = await this.clienteRepo.findOne({
      where: {
        idclientes,
      },
    });
    if (!clienteEncontrado) {
      return new HttpException('Cliente no encontrado', HttpStatus.NOT_FOUND);
    }
    return clienteEncontrado;
  }

  async crearCliente(cliente: crearClienteDTO) {
    return await this.clienteRepo.save(cliente);
  }

  async eliminarCliente(idclientes: number) {
    const result = await this.clienteRepo.delete({
      idclientes,
    });
    if (result.affected === 0) {
      return new HttpException(
        'El cliente que desea eliminar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }

  async actualizarCliente(
    idclientes: number,
    clienteActualizado: crearClienteDTO,
  ) {
    const clienteEncontrado = await this.clienteRepo.findOne({
      where: { idclientes },
    });
    if (!clienteEncontrado) {
      return new HttpException('El cliente no existe', HttpStatus.NOT_FOUND);
    }
    const actCliente = Object.assign(clienteEncontrado, clienteActualizado);

    return this.clienteRepo.save(actCliente);
  }
}
