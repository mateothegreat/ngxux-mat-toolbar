import { Injectable }          from '@angular/core';
import { Subject }             from 'rxjs';
import { NgxuxMatToolbarItem } from './ngxux-mat-toolbar-item';

@Injectable({
    providedIn: 'root'
})
export class NgxuxMatToolbarService {

    /**
     * Menu items.
     */
    public menuItems: Array<NgxuxMatToolbarItem> = [];

    /**
     * Observable for menu item click events.
     */
    public click$: Subject<NgxuxMatToolbarItem> = new Subject();

    /**
     * Internal function used to propogate click events to the observable.
     */
    public onClick(menuItem: NgxuxMatToolbarItem): void {

        this.click$.next(menuItem);

    }

}
