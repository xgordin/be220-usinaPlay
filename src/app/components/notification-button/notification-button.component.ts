import { Component, OnInit } from '@angular/core';
import { notificationMock } from 'src/mock-data/mock-data';

@Component({
  selector: 'app-notification-button',
  templateUrl: 'notification-button.component.html',
  styleUrls: ['notification-button.component.scss'],
})
export class NotificationButtonComponent implements OnInit {
  notifications = notificationMock;

  constructor() {}

  ngOnInit() {}

  checkNotifications() {
    return this.notifications.some(x=>!x.isRead)
  }
}
