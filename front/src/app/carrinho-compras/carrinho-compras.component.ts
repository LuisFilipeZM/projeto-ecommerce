import { Component, OnInit } from '@angular/core';
import { CarrinhoComprasService } from '../service/carrinho-compras.service';
import { api } from 'src/api';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {
  public carrinhos: any[] = []; 
  public produto:number = 0;
  public nome_produto: string = '';
  public id_produto: number = 0;
  public valor_produto: number = 0;
  public usuario_id: number = 0;
  public imagem_produto: string = '';
  public quantidade_produto: number = 0;

  constructor(
    public carrinho_service:CarrinhoComprasService
  ){  }

  ngOnInit(): void {
    this.listarCarrinho();
  }

  public async listarCarrinho() {
    const user = JSON.parse(localStorage.getItem('user') as any);
    const {data} = await api.get(`/carrinho/${user.id}`);
    this.carrinhos = data;
  }
  
  public async removerProduto(id: number) {
    await api.delete(`/produtos/${id}`);
    await this.listarCarrinho();
  }

  public async adicionarProdutoCarrinho() {
     const user = JSON.parse(localStorage.getItem('user') as any);
     const produto = {
      nome_produto: this.produto,
      id_produto: this.id_produto,
      valor_produto: this.valor_produto,
      usuario_id: user.id,
      imagem_produto: this.imagem_produto,
      quantidade_produto: this.quantidade_produto
    }
    this.carrinhos.push(produto);
  }
}