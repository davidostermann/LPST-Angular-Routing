import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent, UrlSegment } from '@angular/router';
import {
  filter,
  map,
  switchMap,
  concatMap,
  mergeMap,
  combineLatest,
  combineAll
} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    /**
     * Au cas où RouterLinkAcive ne suffit pas, on peut récupérer l'url comme ça :
     */
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe( (event: RouterEvent) => {
      console.log(event.url.slice(1));
    });

    /** Methode 2 : Permet de récupérer des elements spécifique tels que les params via this.route.paramsMap */
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(_ => this.route.firstChild.url)
      )
      .subscribe( (segs: UrlSegment[]) => {
        console.log('path : ', segs.length && segs[0].path);
      });
  }
}
