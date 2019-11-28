import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { HomeComponent } from './home/home.component';
import { BotaoComponent } from './botao/botao.component';
import { TableComponent } from './table/table.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    HomeComponent,
    BotaoComponent,
    TableComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
