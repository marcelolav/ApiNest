import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Modulos para los endpoints
import { ProductosModule } from './productos/productos.module';
import { RubrosModule } from './/rubros/rubros.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ServiciosModule } from './servicios/servicios.module';
import { ComprasCabeceraModule } from './compras-cabecera/compras-cabecera.module';
import { ComprasDetalleModule } from './compras-detalle/compras-detalle.module';
import { VentasCabeceraModule } from './ventas-cabecera/ventas-cabecera.module';
import { VentasDetalleModule } from './ventas-detalle/ventas-detalle.module';
import { AuxproductosModule } from './auxproductos/auxproductos.module';

// Entidades 
import { Auxproducto } from './auxproductos/auxproducto.entity';
import { Cliente } from './clientes/cliente.entity';
import { ComprasCabecera } from './compras-cabecera/compras-cabecera.entity';
import { ComprasDetalle } from './compras-detalle/compras-detalle.entity';
import { Producto } from './productos/producto.entity';
import { Proveedor } from './proveedores/proveedor.entity';
import { Rubro } from './rubros/rubro.entity';
import { VentasCabecera } from './ventas-cabecera/ventas-cabecera.entity';
import { VentasDetalle } from './ventas-detalle/ventas-detalle.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '4Vfr7RzpBppAPmjU0cEp',
      database: 'inventario',
      // autoLoadEntities: true,
      // logging: true,
      // entities: ['./dist/**/*.entity.js'],
      entities: [
        Auxproducto,
        Cliente,
        ComprasCabecera,
        ComprasDetalle,
        Producto,
        Proveedor,
        Rubro,
        VentasCabecera,
        VentasDetalle
      ],
      synchronize: true,
    }),
    ProductosModule,
    RubrosModule,
    ClientesModule,
    ProveedoresModule,
    ServiciosModule,
    ComprasCabeceraModule,
    ComprasDetalleModule,
    VentasCabeceraModule,
    VentasDetalleModule,
    AuxproductosModule,
  ],
})
export class AppModule {}
