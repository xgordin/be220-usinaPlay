import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercices-card',
  templateUrl: './exercices-card.component.html',
  styleUrls: ['./exercices-card.component.scss']
})
export class ExercicesCardComponent {
  @Input() image: any;
  @Input() title: string = '';
  @Input() keepTraining: boolean = false;
  @Input() isPersonalTraining: boolean = false;


}
