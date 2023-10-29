import { Component } from '@angular/core';
import { personMock } from 'src/mock-data/mock-data';

@Component({
  selector: 'app-user-card-info',
  templateUrl: './user-card-info.component.html',
  styleUrls: ['./user-card-info.component.scss'],
})
export class UserCardInfoComponent {
  constructor() {}

  person = personMock
}
