import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FarmaceuticoService } from '../services/farmaceutico.service';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss']
})
export class FarmaceuticoComponent implements OnInit {

  formularioFarmaceutico: FormGroup;

  constructor(
    private farmaceuticoService: FarmaceuticoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioFarmaceutico = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      email: [null],
      documento: [null, Validators.required],
      crf: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log('form', this.formularioFarmaceutico);
    console.log('nome', this.formularioFarmaceutico.get('nome').value);

    if (this.formularioFarmaceutico.valid) {
      if (this.formularioFarmaceutico.get('id').value) {
        this.farmaceuticoService.atualizar(this.formularioFarmaceutico.value).subscribe(() => {
          console.log('atualizou');
        });
      } else {
        this.farmaceuticoService.cadastrar(this.formularioFarmaceutico.value).subscribe(() => {
          console.log('criou');
        });
      }
    }

  }

  listaFarmaceutico() {
  }
  editaFarmaceutico() {
  }
  excluiFarmaceutico() {
  }
}
