import { Module } from '@nestjs/common';
import { ServiciosController } from './servicios.controller';
import { ServiciosService } from './servicios.service';
import { Servicio } from './servicio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Servicio])],
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
