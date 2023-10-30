import { Component } from '@angular/core';

@Component({
  selector: 'app-header-achievement-buttons',
  templateUrl: './header-achievement-buttons.component.html',
  styleUrls: ['./header-achievement-buttons.component.scss']
})
export class HeaderAchievementButtonsComponent {


  navigateMyBody(){
    console.log('Navegar para my body')
  }

  navigateAchievment(){
    console.log('Navegar para achievment');
    
  }
}
