import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NavigationEnd, Route, Router, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
import { ROUTES_INDEXES, ROUTES_NAME } from '../../shared/enums/routes.enum';

const routesMap: Map<
  ROUTES_INDEXES,
  { path: ROUTES_NAME; displayName: ROUTES_NAME }
> = new Map();

routesMap.set(ROUTES_INDEXES.MAP, {
  path: ROUTES_NAME.MAP,
  displayName: ROUTES_NAME.MAP_DISPLAY,
});
routesMap.set(ROUTES_INDEXES.REPORT, {
  path: ROUTES_NAME.REPORT,
  displayName: ROUTES_NAME.REPORT_DISPLAY,
});

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  routeSubscription: Subscription;
  selectedIndex: number = -1;
  tabsList: Map<
    ROUTES_INDEXES,
    { path: ROUTES_NAME; displayName: ROUTES_NAME }
  > = routesMap;

  constructor(private _router: Router) {
    this.routeSubscription = _router.events.subscribe(
      (routerEvent: RouterEvent) => {
        if (routerEvent instanceof NavigationEnd) {
          _router.config.map((route: Route) => {
            if (
              routerEvent.url.indexOf(route.path) !== -1 &&
              route.data?.index !== undefined
            ) {
              this.selectedIndex = route.data.index;
            }
          });
        }
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onSelectedTabChange(event: MatTabChangeEvent): void {
    this._router.navigateByUrl(`/${routesMap.get(event.index).path}`);
  }
}
