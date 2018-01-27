import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public appService: AppService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(d => console.log('d : ', d[0].path));
  }

  public selectMenu(menu): void {
    this.appService.selectedMenu = menu;
    console.log('coucou : ', this.route.snapshot.url);
  }
}
