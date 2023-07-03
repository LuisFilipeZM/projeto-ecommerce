import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoComprasService } from '../service/carrinho-compras.service';
import { api } from 'src/api';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit{
  public produto:any;
  public quantidade:number = 1;
  public url:string = '';
  public path:number = 0;

  constructor(
    public activated_route:ActivatedRoute,
    public produto_service:ProdutoService,
    public carrinho_service:CarrinhoComprasService
  ){}

  ngOnInit(): void {
    this.url = window.location.href;
    this.path = Number(this.url.split('/produto/')[1]);
    this.bucarProduto(this.path);
  }

  increment() {
    this.quantidade++;
  }
  
  decrement() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  async bucarProduto(path: number) {
    const response = await api.get(`/produtos/${path}`);
    this.produto = response.data;  
  }
}