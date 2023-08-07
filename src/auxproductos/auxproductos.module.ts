import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuxproductosController } from './auxproductos.controller';
import { AuxproductosService } from './auxproductos.service';
import { Productos_cv } from './auxproductos_cv.entity';
import { Auxproducto } from './auxproducto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Productos_cv, Auxproducto])],
  controllers: [AuxproductosController],
  providers: [AuxproductosService],
})
export class AuxproductosModule {}
