import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userLogado: boolean = false;
  public userEmail: string = '';

  constructor() {
    }

  ngOnInit() {
    this.usuarioLogado();
    const userItem = localStorage.getItem('user');
    const _userEmail = userItem ?  JSON.parse(userItem).email : "Minha Conta";
    this.userEmail = _userEmail;
  }

  logout() {
    localStorage.removeItem('user');
  }

  usuarioLogado() {
    const user = localStorage.getItem('user');
    if (user) {
      this.userLogado = true;
    } else {
      this.userLogado = false;
    }
  }
}
