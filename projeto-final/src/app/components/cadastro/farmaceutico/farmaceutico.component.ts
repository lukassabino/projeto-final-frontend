import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss']
})
export class FarmaceuticoComponent implements OnInit {

  formularioFarmaceutico: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioFarmaceutico = this.formBuilder.group({
      codigo: [null, Validators.required],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null]
    });
  }

  onSubmit() {
    console.log(this.formularioFarmaceutico);
    console.log(this.formularioFarmaceutico.get('nome').value);
    console.log(this.formularioFarmaceutico.controls.email.value);
  }

  listaFarmaceutico() {
  }
  editaFarmaceutico() {
  }
  excluiFarmaceutico() {
  }
}
