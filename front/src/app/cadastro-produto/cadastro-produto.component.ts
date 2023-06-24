import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  public produtos:Array<any> = [];

  constructor(
    public activated_route:ActivatedRoute
  ){ }

  ngOnInit(){
    this.isEnabled = this.produtos.length ? false : true;
  }
  public adicionarProduto(){
    const produtos = {
      nome: this.nome,
      descricao: this.descricao,
      quantidade: this.quantidade,
      valor: this.valor,
      imagem_url: this.imagem_url
    }

    if (this.produtos.find(item => item.nome.toLocaleLowerCase() === produtos.nome.toLocaleLowerCase())){
      alert("Já existe um produto com o mesmo nome");
      return;
    }

    this.produtos.push(produtos);

    console.log(this.produtos);
  }

  removerProduto(nome: string){
    this.produtos = this.produtos.filter(item => item.nome!== nome);
    console.log(this.produtos);
  }
}
