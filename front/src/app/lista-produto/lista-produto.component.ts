import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/api';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  public produtos: Array<any> = [];

  constructor(
    public activated_route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarProduto();
  }

  public async buscarProduto() {
    const { data } = await api.get('/produtos');
    this.produtos = data;
  }

  
}
