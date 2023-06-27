import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // importacion de componentes
  {path:'',component:MainComponent},
  {path:'crear producto', component:CrearProductoComponent},
  {path:'editar-producto/:id',component:CrearProductoComponent},
  {path:'listar',component:ListarProductosComponent},

  {path:'**',redirectTo:'',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
