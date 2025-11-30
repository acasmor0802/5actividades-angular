import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ProductosComponent } from './productos/productos.component';
import { FacturaComponent } from './factura/factura.component';
import { RegistroAvanzadoComponent } from './registro-avanzado/registro-avanzado';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegistroComponent,
    ProductosComponent,
    FacturaComponent,
    RegistroAvanzadoComponent,
    PerfilUsuarioComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'formularios-angular-final';
}