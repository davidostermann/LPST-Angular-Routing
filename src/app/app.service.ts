import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  selectedMenu = 'home';
  constructor() {}

  selectMenu(menu) {
    this.selectedMenu = menu;
  }
}
