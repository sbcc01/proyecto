import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Servicio WISP';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productoService: ProductoService,
    private route: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      cliente: ['', Validators.required],
      numero: ['', Validators.required],
      servicio: ['', Validators.required],
      plan: ['', Validators.required],
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      cliente: this.productoForm.get('cliente')?.value,
      numero: this.productoForm.get('numero')?.value,
      servicio: this.productoForm.get('servicio')?.value,
      plan: this.productoForm.get('plan')?.value,
    };

    if (this.id !== null) {
      this.productoService.editarProducto(this.id, PRODUCTO).subscribe(
        () => {
          this.toastr.info('El plan fue actualizado con exito!', 'plan Actualizado!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    } else {
      console.log(PRODUCTO);
      this.productoService.guardarProducto(PRODUCTO).subscribe(
        () => {
          this.toastr.success('El plan fue registrado con exito!', 'Plan Registrado!');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar plan';
      this.productoService.obtenerProducto(this.id).subscribe((data) => {
        this.productoForm.setValue({
          cliente: data.cliente,
          numero: data.numero,
          servicio: data.servicio,
          plan: data.plan,
        });
      });
    }
  }
}
