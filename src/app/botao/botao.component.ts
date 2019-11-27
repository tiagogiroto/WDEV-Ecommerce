import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {


  public texto:string

  constructor() { }

  ngOnInit() {
    this.texto = 'Olá, componente aqui!'
  }

  clickou(){
    this.texto = "JOÃO É GAY"
  }

}
