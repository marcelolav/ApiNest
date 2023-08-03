import { Module } from '@nestjs/common';
import { VentasDetalleController } from './ventas-detalle.controller';
import { VentasDetalleService } from './ventas-detalle.service';
import { VentasDetalle } from './ventas-detalle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VentasDetalle])],
  controllers: [VentasDetalleController],
  providers: [VentasDetalleService],
})
export class VentasDetalleModule {}
