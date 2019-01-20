import { Component, Input }       from '@angular/core';
import { NgxuxMatToolbarService } from './ngxux-mat-toolbar.service';

@Component({

    selector: 'ngxux-mat-toolbar',

    template: `

        <div class="wrapper"
             [style.background-color]="backgroundColor">

            <div class="left">

                {{ title }} <span>{{ subtitle }}</span>

            </div>

            <div class="right">

                <div *ngFor="let item of ngxuxMatToolbarService.menuItems"
                     (click)="ngxuxMatToolbarService.onClick(item)"
                     class="item"
                     routerLinkActive="active"
                     [routerLink]="[ item.path ]">

                    <mat-icon class="icon"
                              [style.color]="item.color">{{ item.icon }}</mat-icon>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-toolbar.component.scss' ]

})
export class NgxuxMatToolbarComponent {

    @Input() public title: string;
    @Input() public subtitle: string;
    @Input() public backgroundColor: string = '#0390EA';
    @Input() public headerTextColor: string = '#EBF0F2';
    @Input() public headerSubTextColor: string = '#85d4ff';

    public constructor(public ngxuxMatToolbarService: NgxuxMatToolbarService) {

    }

}
