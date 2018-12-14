import { Component, Input } from '@angular/core';

@Component({

    selector: 'ngxux-mat-toolbar',

    template: `

        <div class="wrapper">

            <div class="left">

                {{ title }} <span>{{ subtitle }}</span>

            </div>

            <div class="right">


            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-toolbar.component.scss' ]

})
export class NgxuxMatToolbarComponent {

    @Input() public title: string;
    @Input() public subtitle: string;

}
