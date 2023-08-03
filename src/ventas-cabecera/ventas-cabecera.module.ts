import { Module } from '@nestjs/common';
import { VentasCabeceraController } from './ventas-cabecera.controller';
import { VentasCabeceraService } from './ventas-cabecera.service';
import { VentasCabecera } from './ventas-cabecera.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VentasCabecera])],
  controllers: [VentasCabeceraController],
  providers: [VentasCabeceraService],
})
export class VentasCabeceraModule {}
