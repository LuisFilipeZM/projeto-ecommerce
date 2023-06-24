import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { api } from 'src/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email:string = '';
  public senha:string = '';

  constructor(
    public activated_route:ActivatedRoute,
    private router: Router
  ){ }

  async autenticar() {
    try {
      const {data} = await api.post('/login', {
        email: this.email,
        senha: this.senha
      })
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/home']);
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
}
