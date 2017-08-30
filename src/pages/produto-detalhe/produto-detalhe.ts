import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosProvider } from "../../providers/produtos/produtos";

/**
 * Generated class for the ProdutoDetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {
  public id;
  public produto={
    name: "",
    price: "",
    description: "" 
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtosProvider: ProdutosProvider
  ) {
  }

  ionViewDidLoad() {
    this.id = this.navParams.get("id");
    this.produtosProvider.getProdutoDetalhes(this.id).subscribe(response=>{
      var res = JSON.parse((response as any)._body);
      this.produto = res.data;
    })
  }

  cadastraProduto(produto){
    // this.produtosProvider.criaPedido()
  }

}
