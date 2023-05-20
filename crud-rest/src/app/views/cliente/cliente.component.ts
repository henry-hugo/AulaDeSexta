import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  listaClientes: Cliente[] = [];
  adicionarCliente = new Cliente();
  estaEditando = false;
  lista = true;

  constructor(private clienteService: ClienteService){}
  listar(){
    this.clienteService.listar().subscribe(clientes=>{
      this.listaClientes = clientes ;
      this.lista = false;
    });
  }
  adicionar(){
    this.clienteService.inserir(this.adicionarCliente).subscribe(clientes=>{
      this.listar();
    });
  }
  excluir(id: number){
    this.clienteService.excluir(id).subscribe(clientes=>{
      this.listar();
    });
  }
  editar(){
      this.clienteService.atualizar(this.adicionarCliente).subscribe(cliente=>{
      this.listar();
    });
  }
  salvar(){
    if(this.estaEditando){
      this.editar();
    }else{
      this.adicionar();
    }
  }
  selecionar(cliente:Cliente){
    this.adicionarCliente = cliente;
    this.estaEditando = true;
  }
  cancelar(){
    this.estaEditando = false;
    this.adicionarCliente = new Cliente();

  }
}



//subscribe e para pega o retorno do Observable
