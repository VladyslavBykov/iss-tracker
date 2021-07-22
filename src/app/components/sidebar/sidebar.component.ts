import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IssService } from 'src/app/shared/services/iss.service';
import { FilterIss, GetIssList } from 'src/app/store/actions/iss.action';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  filter: string = '';
  filterChanged: Subject<string> = new Subject<string>();

  constructor(
    private _store: Store<IAppState>,
    private _issService: IssService
  ) {
    this.filterChanged
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((model: string) => {
        this.filter = model;
        this.filterList();
      });
  }

  ngOnInit(): void {
    this.filter = this._issService.getFilter();
    this._store.dispatch(new GetIssList());
  }

  clearFilter(): void {
    this.filter = '';
    this.filterList();
  }

  onFilterChange(query: string): void {
    this.filterChanged.next(query);
  }

  filterList(): void {
    this._store.dispatch(new FilterIss(this.filter));
  }
}
