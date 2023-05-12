import { Component } from '@angular/core';

@Component({
  selector: 'app-megaevolucao',
  templateUrl: './megaevolucao.component.html',
  styleUrls: ['./megaevolucao.component.css']
})
export class MegaevolucaoComponent {

imgEV = 'imgEV';
digmon = 'assets/img1.jpg';
  evolucao(){
    if(this.digmon = 'assets/img1.jpg'){
      this.digmon = 'assets/img2.jpg';
    }else{
      this.digmon = 'assets/img1.jpg';
    }
}
}
