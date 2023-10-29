import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { UserCardInfoComponent } from './user-card-info/user-card-info.component';



@NgModule({
  declarations: [NotificationButtonComponent, UserCardInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[NotificationButtonComponent, UserCardInfoComponent]
})
export class ComponentsModule { }
