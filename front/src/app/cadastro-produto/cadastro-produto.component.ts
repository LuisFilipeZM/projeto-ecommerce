import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/api';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit{
  public id: number = 0;
  public nome: string = '';
  public categoria: string = '';
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

  limparCampos() {
    this.id = 0;
    this.nome = '';
    this.descricao = '';
    this.quantidade = 0;
    this.valor = 0;
    this.imagem_url = '';
    this.categoria = '';
  }

  public async listarProdutos(){
    const {data} = await api.get('/produtos');
    this.produtos = data;
  }

  public async removerProduto(id: number) {
    if (window.confirm('Tem certeza de que deseja remover o produto?')) {
      await api.delete(`/produtos/${id}`);
      await this.listarProdutos();
    }else{
      return;
    } 
  }

  public adicionarProduto(){
    this.produto = {
      nome: this.nome,
      descricao: this.descricao,
      quantidade: this.quantidade,
      valor: this.valor,
      imagem_url: this.imagem_url,
      categoria: this.categoria,
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

  public async buscarProduto(id: number){
    const response = await api.get(`/produtos/${id}`);
    const produto = response.data;
    this.id = produto.id;
    this.nome = produto.nome;
    this.descricao = produto.descricao;
    this.quantidade = produto.quantidade;
    this.valor = produto.valor;
    this.imagem_url = produto.imagem_url;
    this.categoria = produto.categoria;
}

  public async editarProduto(id: number) {
   const response = await api.put(`/produtos/${id}`, {
      nome: this.nome,
      descricao: this.descricao,
      quantidade: this.quantidade,
      valor: this.valor,
      imagem_url: this.imagem_url,
      categoria: this.categoria,
  });
  }
}
