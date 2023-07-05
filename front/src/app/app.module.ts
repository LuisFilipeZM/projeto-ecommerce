import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoHomeComponent,
    ProdutoDetalheComponent,
    ListaProdutoComponent,
    CheckoutComponent,
    CadastroComponent,
    CarrinhoComprasComponent,
    LoginComponent,
    MinhaContaComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
