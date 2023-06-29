import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/api';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit{
  public nome: string = '';
  public descricao: string = '';
  public quantidade: number = 0;
  public valor: number = 0;
  public imagem_url: string = '';
  public isEnabled: boolean = true;
  public produto: any = null;
  public produtos: any[] = [];

  constructor(
    public activated_route:ActivatedRoute
  ){ }

  ngOnInit(){
    this.listarProdutos();
  }

  public async listarProdutos(){
    const {data} = await api.get('/produtos');
    this.produtos = data;
  }

  public async removerProduto(id: number) {
    await api.delete(`/produtos/${id}`);
    await this.listarProdutos();
  }

  public adicionarProduto(){
    this.produto = {
      nome: this.nome,
      descricao: this.descricao,
      quantidade: this.quantidade,
      valor: this.valor,
      imagem_url: this.imagem_url
    }
  }

  public async salvarProdutos(){
    this.adicionarProduto();
    try {
      await api.post('/produtos', this.produto)
    } catch (error) {
      console.log(error)
    }
    await this.listarProdutos();
  }
}
