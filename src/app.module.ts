import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { RubrosModule } from './/rubros/rubros.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ServiciosModule } from './servicios/servicios.module';
<<<<<<< HEAD
import { ComprasCabeceraModule } from './compras-cabecera/compras-cabecera.module';
import { ComprasDetalleModule } from './compras-detalle/compras-detalle.module';
import { VentasCabeceraModule } from './ventas-cabecera/ventas-cabecera.module';
import { VentasDetalleModule } from './ventas-detalle/ventas-detalle.module';
=======
>>>>>>> 825de34602b8c7bd0cb6461a9de317aac3297631

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
<<<<<<< HEAD
    ComprasCabeceraModule,
    ComprasDetalleModule,
    VentasCabeceraModule,
    VentasDetalleModule,
=======
>>>>>>> 825de34602b8c7bd0cb6461a9de317aac3297631
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
