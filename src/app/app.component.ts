import { Component, OnInit } from '@angular/core';
import { Person, personMock} from 'src/mock-data/mock-data';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Programas', url: '/folder/programas', icon: 'stats-chart' },
    { title: 'Saúde', url: '/folder/saude', icon: 'heart' },
    { title: 'Exercícios', url: '/folder/exercicios', icon: 'barbell' },
    { title: 'Conteúdos', url: '/folder/conteudos', icon: 'videocam' },
  ];

  person = personMock


  constructor() {}

  ngOnInit(): void {
    
  }
}


