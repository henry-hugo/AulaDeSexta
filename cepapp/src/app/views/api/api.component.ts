import { Component } from '@angular/core';
import { Endereco } from 'src/app/model/endereco';
import { CepService } from 'src/app/service/cep.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent {
  cep = '';
  endereco?: Endereco = undefined;
  constructor(private CepService :CepService){}
  consultarCep(){
    this.CepService.obterEndereco(this.cep).subscribe(endereco =>{
      this.endereco = endereco;
    });
  }
}
