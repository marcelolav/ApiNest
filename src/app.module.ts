import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
// import { ProductosController } from './productos/productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ProductosService } from './productos/productos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Nxt3005F1',
      database: 'ecom',
      // logging: true,
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
    }),
    ProductosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
