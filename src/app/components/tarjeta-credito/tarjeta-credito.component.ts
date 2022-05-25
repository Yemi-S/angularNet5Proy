import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarjeta } from 'src/app/models/tarjeta';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listaTarjetas: Tarjeta[] = [
    {titular: 'Juan Perez', numeroTarjeta: '1234567890123654',fechaExpiracion: '11/23',cvv:'123'},
    {titular: 'Miguel Gonzales', numeroTarjeta: '5555567890123654',fechaExpiracion: '11/24',cvv:'456'},
  ];

  formTarjeta: FormGroup;
  constructor(private fb:FormBuilder, 
              private toastr: ToastrService) { 
    this.formTarjeta = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['',  [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['',  [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['',  [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  agregarTarjeta(): void{
    console.log(this.formTarjeta);

    const tarjetaData: Tarjeta = {
      titular: this.formTarjeta.get('titular')?.value,
      numeroTarjeta: this.formTarjeta.get('numeroTarjeta')?.value,
      fechaExpiracion: this.formTarjeta.get('fechaExpiracion')?.value,
      cvv: this.formTarjeta.get('cvv')?.value,
    };

    this.listaTarjetas.push(tarjetaData);
    this.toastr.success('La tarjeta fue registrada con éxito', 'Tarjeta registrada');
    this.formTarjeta.reset();
  }

}
