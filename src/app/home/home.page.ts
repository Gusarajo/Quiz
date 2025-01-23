import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  tasks: any = [];
  NombreE = new FormControl('');
  Nombre = new FormControl('');
  Numero = new FormControl('');
  ubicacion = new FormControl('');
  FechaI = new FormControl('');
  FechaF = new FormControl('');

  constructor() { }
  buttonclick() {
    if (this.NombreE.value && this.Nombre.value && this.Numero.value && this.ubicacion.value && this.FechaI.value && this.FechaF.value) {
      const newtask = {
        nombreE: this.NombreE.value,
        nombre: this.Nombre.value,
        numero: this.Numero.value,
        Ubicacion: this.ubicacion.value,
        fechaI: this.FechaI.value,
        fechaF: this.FechaF.value
      };
      this.tasks.push(newtask);
      console.log('se agrego');
      this.NombreE.setValue('');
      this.Nombre.setValue('');
      this.Numero.setValue('');
      this.ubicacion.setValue('');
      this.FechaI.setValue('');
      this.FechaF.setValue('');
    } else {
      alert('llena los campos')
    }
  }
}