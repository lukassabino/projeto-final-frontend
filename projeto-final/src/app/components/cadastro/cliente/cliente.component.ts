import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  formularioCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioCliente = this.formBuilder.group({
      codigo: [null, Validators.required],
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      telefone: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null],
      limitecompra: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formularioCliente);
    console.log(this.formularioCliente.get('nome').value);
    console.log(this.formularioCliente.controls.email.value);
  }

  listaCliente() {
  }
  editaCliente() {
  }
  excluiCliente() {
  }
}
