import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos;
  constructor() 
  { 
      this.produtos = [
      new Produto('Caneta', 10.00, 'https://encurtador.com.br/cwxy8'),
      new Produto('Caneta', 10.00, 'https://encurtador.com.br/cwxy8'),
      new Produto('Caneta', 10.00, 'https://encurtador.com.br/cwxy8'),
      new Produto('Caneta', 10.00, 'https://encurtador.com.br/cwxy8'),
      new Produto('Caneta', 10.00, 'https://encurtador.com.br/cwxy8')
      ]
  }

  ngOnInit() {
  }

}
