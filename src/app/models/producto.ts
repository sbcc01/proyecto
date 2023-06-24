export class Producto {
  _id?: number;
  cliente: string;
  numero: number;
  servicio: string;
  plan: string;

  constructor(cliente: string, numero: number, servicio: string, plan: string ){
      this.cliente = cliente;
      this.numero = numero;
      this.servicio = servicio;
      this.plan = plan;
  }
}
