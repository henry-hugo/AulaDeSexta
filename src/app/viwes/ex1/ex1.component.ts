import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component {
  cor1 = 'mudarFundo';
  cor2 = 'corNormal';
  mudarCor(){
    if(this.cor1 == 'mudarFundo'){
      this.cor1 = this.cor2;
    }else{
      this.cor1 = 'mudarFundo';
    }
  
  }
}
