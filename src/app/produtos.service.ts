import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produtos => produtos.id == produtoId);
  }
  
}
