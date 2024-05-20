import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lesson-input',
  standalone: true,
  imports: [],
  templateUrl: './lesson-input.component.html',
  styleUrl: './lesson-input.component.css'
})
export class LessonInputComponent {
  @Input() receivedMessage:string = "";
  @Output() senddedMessage = new EventEmitter<string>();
  sendToDad(){
    this.senddedMessage.emit("They are watching me");
  }
}
