import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasCabeceraController } from './compras-cabecera.controller';
import { ComprasCabeceraService } from './compras-cabecera.service';
import { ComprasCabecera } from './compras-cabecera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComprasCabecera])],
  controllers: [ComprasCabeceraController],
  providers: [ComprasCabeceraService],
})
export class ComprasCabeceraModule {}
