import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { crearClienteDTO } from './dto/cliente.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private clientesService: ClientesService) {}

  @Get()
  obtenerClientes() {
    return this.clientesService.obtenerClientes();
  }

  @Get(':id')
  obtenerCliente(@Param('id', ParseIntPipe) idclientes: number) {
    return this.clientesService.obtenerCliente(idclientes);
  }

  @Post()
  crearCliente(@Body() nuevoCliente: crearClienteDTO) {
    return this.clientesService.crearCliente(nuevoCliente);
  }

  @Delete(':id')
  eliminarCliente(@Param('id', ParseIntPipe) idclientes: number) {
    this.clientesService.eliminarCliente(idclientes);
  }

  @Patch(':id')
  actualizarCliente(
    @Param('id', ParseIntPipe) idclientes: number,
    @Body() clienteActualizado: crearClienteDTO,
  ) {
    return this.clientesService.actualizarCliente(
      idclientes,
      clienteActualizado,
    );
  }
}
