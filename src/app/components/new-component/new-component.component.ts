import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  title:String = 'learning-angular';
  name:String = "property name receive LK";
  age:number = 4+4;

  arrayNames:string[] = ["a", "b", "c"];

  willApparece:boolean = false;

  bigFont:number = 60

  upperCaseClassV2 = 'upperCaseClass'

  showMe(){
    alert('im showing')
  }
}
