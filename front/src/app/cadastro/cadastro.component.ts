import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public nome:string = '';
  public cpf:string = '';
  public email:string = '';
  public senha:string = '';
  public data_nascimento:Date = new Date();

  constructor(
    public activated_route:ActivatedRoute
  ){ }

  public async cadastro() {
    const nome = this.nome.trim();
    const cpf = this.cpf.trim();
    const email = this.email.trim();
    const senha = this.senha.trim();
    const data_nascimento = this.data_nascimento; 

    console.log({nome, cpf, email, senha, data_nascimento});

    
    try {
      await api.post('/usuarios', {nome, cpf, email, senha, data_nascimento})
    } catch (error) {
      console.log(error)
    }
  }
}
