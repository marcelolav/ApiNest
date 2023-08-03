import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rubro } from './rubro.entity';
import { RubrosController } from './rubros.controller';
import { RubrosService } from './rubros.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rubro])],
  controllers: [RubrosController],
  providers: [RubrosService],
})
export class RubrosModule {}
