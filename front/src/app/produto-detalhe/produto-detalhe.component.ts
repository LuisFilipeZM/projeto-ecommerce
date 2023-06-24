import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { CarrinhoComprasService } from '../service/carrinho-compras.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit{
  public produto:any;
  public quantidade:number = 1;
  constructor(
    public activated_route:ActivatedRoute,
    public produto_service:ProdutoService,
    public carrinho_service:CarrinhoComprasService
  ){}

  ngOnInit(): void {
    this.carregar();
  }

  increment() {
    this.quantidade++;
  }
  
  decrement() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }
  carregar(){
    this.activated_route.params
    .subscribe((_params:any) => {
      this.produto = this.produto_service.get(_params.id)
    })
  }

  addCarrinho(produto:any){
    console.log(produto);
    console.log(this.quantidade);
    this.carrinho_service.add({
      "id":0,
      "produto":produto.id,
      "descricao":produto.nome,
      "quantidade":this.quantidade,
      "valor":produto.preco,
      "imagem":produto.imagem,
      "total":this.quantidade * (produto.preco).toFixed(2)
    });
  }
}