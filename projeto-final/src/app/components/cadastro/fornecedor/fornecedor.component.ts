import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.scss']
})
export class FornecedorComponent implements OnInit {

  formularioFornecedor: FormGroup;

  constructor(
    private fornecedorService: FornecedorService,
    private formBuilder: FormBuilder
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


  listaFornecedor() {
  }
  editaFornecedor() {
  }
  excluiFornecedor() {
  }

}
