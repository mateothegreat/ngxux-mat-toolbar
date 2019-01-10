import { CommonModule }             from '@angular/common';
import { NgModule }                 from '@angular/core';
import { MatIconModule }            from '@angular/material';
import { RouterModule }             from '@angular/router';
import { NgxuxMatToolbarComponent } from './ngxux-mat-toolbar.component';

@NgModule({
    declarations: [ NgxuxMatToolbarComponent ],
    imports: [

        CommonModule,
        RouterModule,
        MatIconModule,
    ],
    exports: [ NgxuxMatToolbarComponent ]
})
export class NgxuxMatToolbarModule {
}
