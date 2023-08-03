import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { RubrosModule } from './/rubros/rubros.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ServiciosModule } from './servicios/servicios.module';

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
    RubrosModule,
    ClientesModule,
    ProveedoresModule,
    ServiciosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
