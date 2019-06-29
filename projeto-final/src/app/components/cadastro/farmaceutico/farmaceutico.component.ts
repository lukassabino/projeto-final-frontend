import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FarmaceuticoService } from '../services/farmaceutico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-farmaceutico',
  templateUrl: './farmaceutico.component.html',
  styleUrls: ['./farmaceutico.component.scss']
})
export class FarmaceuticoComponent implements OnInit {

  formularioFarmaceutico: FormGroup;

  constructor(
    private farmaceuticoService: FarmaceuticoService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

    this.activatedRoute.params
    .pipe(
      map(params => params.id),
      switchMap(id =>  this.farmaceuticoService.buscarPorId(id))
    ).subscribe(farmaceutico => this.updateFormulario(farmaceutico));
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
  updateFormulario(farmaceutico) {
    this.formularioFarmaceutico.patchValue({
      id: farmaceutico.id,
      nome: farmaceutico.nome,
      email: farmaceutico.email,
      telefone: farmaceutico.telefone,
      documento: farmaceutico.documento,
      crf: farmaceutico.crf
    });
  }
}
