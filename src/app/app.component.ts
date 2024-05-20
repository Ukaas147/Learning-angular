import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { CommonModule } from '@angular/common';
import { LessonInputComponent } from './components/lesson-input/lesson-input.component';

//construcao do componente
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, LessonInputComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dadMessage:string = "Im watch you"
  showMe(message:string){
    alert(message)
  }
}
//ha um seletor onde seleciona esse 
//standalone tira a pasta de modules geral e fica de forma escopada
//dentro de cada componente importo os moelos que necessitar
//cada componente tem seu import e importa entro do componente