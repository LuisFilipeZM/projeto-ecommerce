import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from 'src/api';


@Component({
  selector: 'app-produto-home',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css']
})
export class ProdutoHomeComponent implements OnInit {
  public produtos:Array<any> = [];

  constructor(
    public router:Router,
  ){

  }
  ngOnInit(): void {
    this.buscarProduto();
  }

 
  public async buscarProduto() {
    const {data} = await api.get('/produtos');
    this.produtos = data;
  }

}