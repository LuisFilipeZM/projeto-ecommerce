import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoComprasService {
  public itens:Array<any> = [];
  public display:boolean = false;
  constructor() { }

  add(item:any){
    this.itens.push(item);
  }

  getValorTotal(){
    let total = 0;
    this.itens.forEach(
      (item:any) => {
        total += item.total;
      }
    );
    return total;
  }

  excluir(indice:number){
    this.itens.splice(indice,1);
  }
}