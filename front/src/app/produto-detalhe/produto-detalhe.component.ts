import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarrinhoComprasComponent } from '../carrinho-compras/carrinho-compras.component';
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

  public async adicionarCarrinho(produto: any) {
    const user = localStorage.getItem('user');
    const _user = JSON.parse(user as any);
    try {
      await api.post('/carrinho', { nome_produto: produto.nome, id_produto: produto.id, valor_produto: produto.valor, usuario_id: _user.id, imagem_produto: produto.imagem_url, quantidade_produto: this.quantidade}
      );
    } catch (error) {
      console.log(error);
    }
  }
 
}