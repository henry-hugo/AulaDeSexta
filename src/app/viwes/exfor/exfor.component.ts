import { Component } from '@angular/core';

@Component({
  selector: 'app-exfor',
  templateUrl: './exfor.component.html',
  styleUrls: ['./exfor.component.css']
})
export class ExforComponent {
  filmes =['filme1','filme2','filme3','filme4','filme5'];
  protagonistas=['rick','homer','peter','cleveland','luffy'];
  protagonista(i :number){
    alert(this.protagonistas[i])  
  }
}
