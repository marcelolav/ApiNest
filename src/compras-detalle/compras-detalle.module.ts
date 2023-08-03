import { Module } from '@nestjs/common';
import { ComprasDetalleController } from './compras-detalle.controller';
import { ComprasDetalleService } from './compras-detalle.service';
import { ComprasDetalle } from './compras-detalle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComprasDetalle])],
  controllers: [ComprasDetalleController],
  providers: [ComprasDetalleService],
})
export class ComprasDetalleModule {}
