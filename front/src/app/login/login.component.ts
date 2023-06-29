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
      console.log(this.email, this.senha);
      const {data} = await api.post('/login', {
        email: this.email,
        senha: this.senha
      })
      console.log(data)
      if(data.success) {
      localStorage.setItem('user', JSON.stringify(data));
      console.log(data);
      this.router.navigate(['/home']);
      }else{
        alert("Usuario ou senha incorretos!")
      }
    } catch (error) {
      this.router.navigate(['/login']);
    }
  }
}