import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProveedoresService } from './proveedores.service';
import { crearProveedorDTO } from './dto/proveedor.dto';
@ApiTags('Proveedores')
@Controller('proveedores')
export class ProveedoresController {
  constructor(private proveedoresService: ProveedoresService) {}
  @Get()
  obtenerProveedores() {
    return this.proveedoresService.obtenerProveedores();
  }

  @Get(':id')
  obtenerProveedor(@Param('id', ParseIntPipe) idproveedores: number) {
    return this.proveedoresService.obtenerProveedor(idproveedores);
  }

  @Post()
  crearCliente(@Body() nuevoProveedor: crearProveedorDTO) {
    return this.proveedoresService.crearProveedor(nuevoProveedor);
  }

  @Delete(':id')
  eliminarCliente(@Param('id', ParseIntPipe) idproveedores: number) {
    this.proveedoresService.eliminarProveedor(idproveedores);
  }

  @Patch(':id')
  actualizarCliente(
    @Param('id', ParseIntPipe) idproveedores: number,
    @Body() proveedorActualizado: crearProveedorDTO,
  ) {
    return this.proveedoresService.actualizarProveedor(
      idproveedores,
      proveedorActualizado,
    );
  }
}
