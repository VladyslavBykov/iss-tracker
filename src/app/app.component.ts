import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IssService } from './shared/services/iss.service';
import { FilterIss, GetIssList } from './store/actions/iss.action';
import { IAppState } from './store/state/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpened: boolean = true;
  constructor(
    private _store: Store<IAppState>,
    private _issService: IssService
  ) {}

  ngOnInit(): void {
    const filter: string = this._issService.getFilter();
    this._store.dispatch(new GetIssList());
    this._store.dispatch(new FilterIss(filter));
    this.bindDrawerDisplaying();
  }

  bindDrawerDisplaying(): void {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];
    this.isOpened = !toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }
}
