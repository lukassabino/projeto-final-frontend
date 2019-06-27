import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  formularioCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.formularioCliente = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      documento: [null, Validators.required],
      telefone: [null],
      email: [null],
      endereco: [null],
      cidade: [null],
      estado: [null],
      limite: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log('form', this.formularioCliente);
    console.log('nome', this.formularioCliente.get('nome').value);

    if (this.formularioCliente.valid) {
      if (this.formularioCliente.get('id').value) {
        this.clienteService.atualizar(this.formularioCliente.value).subscribe(() => {
          console.log('atualizou');
        });
      } else {
        this.clienteService.cadastrar(this.formularioCliente.value).subscribe(() => {
          console.log('criou');
        });
      }
    }

  }

  updateFormulario(cliente) {
    this.formularioCliente.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone
    });
  }

  listaCliente() {
  }
  editaCliente() {
  }
  excluiCliente() {
  }
}
