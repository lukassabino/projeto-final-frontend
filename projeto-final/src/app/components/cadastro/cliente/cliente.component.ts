import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

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

  formularioCliente: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private activatedRoute: ActivatedRoute
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
    this.activatedRoute.params
    .pipe(
      map(params => params.id),
      switchMap(id =>  this.clienteService.buscarPorId(id))
    ).subscribe(cliente => this.updateFormulario(cliente));
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
      documento: cliente.documento,
      endereco: cliente.endereco,
      cidade: cliente.cidade,
      estado: cliente.estado,
      email: cliente.email,
      limite: cliente.limite,
      telefone: cliente.telefone
    });
  }
}
