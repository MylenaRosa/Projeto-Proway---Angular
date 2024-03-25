import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { RouterLink } from '@angular/router';
import { BarraDePesquisaComponent } from '../barra-de-pesquisa/barra-de-pesquisa.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, BarraDePesquisaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public carrinhoService: CarrinhoService
  ){}
}
