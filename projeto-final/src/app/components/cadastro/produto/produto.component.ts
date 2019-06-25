import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  formularioProduto: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioProduto = this.formBuilder.group({
      codigo: [null, Validators.required],
      codbarras: [null, Validators.required],
      nome: [null, Validators.required],
      preco: [null, Validators.required],
      fornecedor: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formularioProduto);
    console.log(this.formularioProduto.get('nome').value);
    console.log(this.formularioProduto.controls.email.value);
  }

}
