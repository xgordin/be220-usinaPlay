import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { UserCardInfoComponent } from './user-card-info/user-card-info.component';
import { HeaderAchievementButtonsComponent } from './header-achievement-buttons/header-achievement-buttons.component';
import { ExercicesCardComponent } from './exercices-card/exercices-card.component';
import { ContentsCardComponent } from './contents-card/contents-card.component';

@NgModule({
  declarations: [
    NotificationButtonComponent,
    UserCardInfoComponent,
    HeaderAchievementButtonsComponent,
    ExercicesCardComponent,
    ContentsCardComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    NotificationButtonComponent,
    UserCardInfoComponent,
    HeaderAchievementButtonsComponent,
    ExercicesCardComponent,
    ContentsCardComponent,
  ],
})
export class ComponentsModule {}
