import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userLogado: boolean = false;

  constructor() {
    }

  ngOnInit() {
    this.usuarioLogado();
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
