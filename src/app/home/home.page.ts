import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  swiperModules = [IonicSlides];

  personalTrainerList = [
    {
      image: '../assets/image/levantamento-peso.png',
      title: 'Levantamento de Peso',
      trainingStarted: true,
      isPersonalTraining: true,
    },
    {
      image: '../assets/image/yoga.png',
      title: 'Yoga Express',
      trainingStarted: false,
      isPersonalTraining: true,
    },
  ];

  programsList = [
    {
      image: '../assets/image/levantamento-peso.png',
      title: 'Levantamento de Peso',
      trainingStarted: true,
      isPersonalTraining: false,
    },
    {
      image: '../assets/image/yoga.png',
      title: 'Yoga Express',
      trainingStarted: false,
      isPersonalTraining: false,
    },
  ];

  contentList = [];

  constructor() {
  }

}
