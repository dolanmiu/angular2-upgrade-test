import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

export const coolComponent = {
    template: 'cool',
    controller: function () {
    }
};

@Directive({
    selector: 'app-chart'
})
export class ChartDirective extends UpgradeComponent {

    constructor(elementRef: ElementRef, injector: Injector) {
        super('coolComponent', elementRef, injector);
    }
}

