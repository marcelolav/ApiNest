import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './modules/productos/productos.module';
//import { ProductosService } from './services/productos/productos.service';
import { ProductosController } from './controllers/productos/productos.controller';

@Module({
  imports: [ProductosModule],
  controllers: [AppController, ProductosController],
  providers: [
    AppService,
    //  ProductosService
  ],
})
export class AppModule {}
