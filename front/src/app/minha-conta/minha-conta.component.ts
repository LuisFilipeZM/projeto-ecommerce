import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { api } from 'src/api';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {
  public nome: string = '';
  public cpf: string = '';
  public email: string = '';
  public senha: string = '';
  public data_nascimento: string = '';
  public usuario: any[] = [];

  constructor(
    public activated_route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.verificarEstaLogado();
    const userItem = localStorage.getItem('user');
    const userId = userItem ? JSON.parse(userItem).id : null;
    this.buscarInformacoes(userId);
  }

  async buscarInformacoes(userId: number) {
    const response = await api.get(`/usuarios/${userId}`);
    const usuario = response.data;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.data_nascimento = this.formatDate(usuario.data_nascimento);
  }

  async editar() {
    const userItem = localStorage.getItem('user');
    const _userId = userItem ? JSON.parse(userItem).id : null;
    const response = await api.put(`/usuarios/${_userId}`, {
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      senha: this.senha,
      data_nascimento: this.data_nascimento.toString() // Convertendo para formato ISO8601
    });
  }

  verificarEstaLogado(){
    const user = window.localStorage.getItem('user');
    if(!user){
      this.router.navigate(['/login']);
      return ;
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}
