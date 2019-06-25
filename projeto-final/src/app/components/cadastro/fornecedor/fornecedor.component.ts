import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  formularioFornecedor: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioFornecedor = this.formBuilder.group({
      codigo: [null, Validators.required],
      razaosocial: [null, Validators.required],
      nomefantasia: [null, Validators.required],
      cnpj: [null, Validators.required],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null]
    });
  }

  onSubmit() {
    console.log(this.formularioFornecedor);
    console.log(this.formularioFornecedor.get('nome').value);
    console.log(this.formularioFornecedor.controls.email.value);
  }

}
