import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { BreakpointObserver } from '@angular/cdk/layout';
// import { Observable } from 'rxjs/Observable';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  public isSmallScreen: boolean;

  constructor(
    public appService: AppService,
    private _breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this._breakpointObserver
      .observe(['(max-width: 701px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }
}
