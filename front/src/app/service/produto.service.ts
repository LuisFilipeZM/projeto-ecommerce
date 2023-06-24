import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  public produtos:Array<any> = [];
  constructor(){
    this.carregar();
  }

  carregar(){
    this.produtos = JSON.parse(String(localStorage.getItem('produtos')));
  }
  getAll(){
    return this.produtos;
  }

  get(produto_id:number){
    return this.produtos.find((produto:any)=>{
      if (produto.id == produto_id){
        return produto;
      }
    });
  }
}