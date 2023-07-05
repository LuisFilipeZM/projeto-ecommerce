import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:ProdutoHomeComponent
  },
  {
    path:'produto/:id',
    component:ProdutoDetalheComponent
  },
  {
    path: 'lista-produto',
    component:ListaProdutoComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'minha-conta',
    component:MinhaContaComponent
  },
  {
    path:'cadastro-produto',
    component:CadastroProdutoComponent
  },
  {
    path:'carrinho',
    component:CarrinhoComprasComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }