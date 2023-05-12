import { Component } from '@angular/core';

@Component({
  selector: 'app-aparecer-esumir',
  templateUrl: './aparecer-esumir.component.html',
  styleUrls: ['./aparecer-esumir.component.css']
})
export class AparecerEsumirComponent {

  div1 = 'visivel';
  div2 = 'visivel';
  div3 ='visivel';

  aparecer = "visivel";
  sumir = "invisivel";

  aparecerSumir(aba: number){
    if(aba == 1){
      this.div1 = 'visivelup';
      this.div2 = 'invisivel';
      this.div3 ='invisivel';
    }else if (aba == 2){
      this.div1 = 'invisivel';
      this.div2 = 'visivelup';
      this.div3 ='invisivel';
    }else if((aba == 3)){
      this.div1 = 'invisivel';
      this.div2 = 'invisivel';
      this.div3 ='visivelup';
    }else{
      this.div1 = 'visivel';
      this.div2 = 'visivel';
      this.div3 ='visivel';
    }

  }
}
