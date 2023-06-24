import { Component } from '@angular/core';
import { CarrinhoComprasService } from '../service/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent {

  public produto:number = 0;

  constructor(
    public carrinho_service:CarrinhoComprasService
  ){  }

  retirarProduto(){
      this.carrinho_service.excluir(this.produto);
  }
}