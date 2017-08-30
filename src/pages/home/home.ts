import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutosProvider } from "../../providers/produtos/produtos";
import { ProdutoDetalhePage } from "../produto-detalhe/produto-detalhe";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public produtos = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private produtosProvider: ProdutosProvider
  ) {

  }

  ngOnInit() {
    this.produtosProvider.getProdutos().subscribe(response => {
      console.log(response);
      var res = JSON.parse((response as any)._body);
      this.produtos = res.data;
    }, error=> {
      console.log(error);
    })
  }

  goToProdutoDetalhe(id){
    this.navCtrl.push(ProdutoDetalhePage, {id: id});
  }

}
