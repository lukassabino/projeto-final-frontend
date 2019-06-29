import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FornecedorService } from '../services/fornecedor.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  states: string[] = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'];

  formularioFornecedor: FormGroup;

  constructor(
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.formularioFornecedor = this.formBuilder.group({
      id: [null],
      razaoSocial: [null, Validators.required],
      nome: [null, Validators.required],
      documento: [null, Validators.required],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null]
    });
    this.activatedRoute.params
    .pipe(
      map(params => params.id),
      switchMap(id =>  this.fornecedorService.buscarPorId(id))
    ).subscribe(cliente => this.updateFormulario(cliente));
  }

  onSubmit() {
    console.log('form', this.formularioFornecedor);
    console.log('nome', this.formularioFornecedor.get('nome').value);

    if (this.formularioFornecedor.valid) {
      if (this.formularioFornecedor.get('id').value) {
        this.fornecedorService.atualizar(this.formularioFornecedor.value).subscribe(() => {
          console.log('atualizou');
        });
      } else {
        this.fornecedorService.cadastrar(this.formularioFornecedor.value).subscribe(() => {
          console.log('criou');
        });
      }
    }

  }

  updateFormulario(fornecedor) {
    this.formularioFornecedor.patchValue({
      id: fornecedor.id,
      nome: fornecedor.nome,
      razaoSocial: fornecedor.razaoSocial,
      documento: fornecedor.documento,
      endereco: fornecedor.endereco,
      cidade: fornecedor.cidade,
      estado: fornecedor.estado,
      email: fornecedor.email,
    });
  }

}
