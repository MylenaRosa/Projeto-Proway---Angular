import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-de-pesquisa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-de-pesquisa.component.html',
  styleUrl: './barra-de-pesquisa.component.css'
})
export class BarraDePesquisaComponent {

  descricao = "";

  constructor(
    private router: Router
  ){}

  pesquisar(){
    if (this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao}});
      return;
    }

    this.router.navigate(["produtos"]);
  }
}
