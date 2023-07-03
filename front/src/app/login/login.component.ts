import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { api } from 'src/api';
import * as bootstrap from "bootstrap";
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email: string = '';
  public senha: string = '';

  constructor(
    public activated_route: ActivatedRoute,
    private router: Router
  ) { }

  async autenticar() {
    try {
      const { data } = await api.post('/login', {
        email: this.email,
        senha: this.senha
      })
      if (data) {
        const { id, email } = data;
        localStorage.setItem('user', JSON.stringify({ id, email }));
        this.router.navigate(['/home']);
      } else {
        $('#errorModal').modal('show'); // Exibe o modal de erro
      }
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
}