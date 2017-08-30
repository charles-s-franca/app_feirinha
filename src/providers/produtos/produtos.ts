import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProdutosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProdutosProvider {

  constructor(public http: Http) {
    console.log('Hello ProdutosProvider Provider');
  }

  getProdutos(){
    return this.http.get("http://apifeirinha.com.br/produtos.php");
  }

  getProdutoDetalhes(id){
    // Concatenação de valores com crase
    // return this.http.get(`http://apifeirinha.com.br/produto.php?id=${id}`);
    return this.http.get("http://apifeirinha.com.br/produto.php?id=" + id);
  }

  criaPedido(id_cliente, produtos: Array<any>){
    // Concatenação de valores com crase
    // return this.http.get(`http://apifeirinha.com.br/produto.php?id=${id}`);
    return this.http.post("http://apifeirinha.com.br/pedidos.php", {
      "id_cliente": id_cliente,
      "produtos": produtos
    });
  }

}
