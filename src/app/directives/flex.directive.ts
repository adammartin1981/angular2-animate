import {Directive, Input, HostBinding} from '@angular/core';
@Directive({
    selector : '[flex]'
})
export class FlexDirective {
    @Input()
    public shrink:number = 1;

    @Input()
    public grow:number = 1;

    @Input()
    public flex:string;

    @HostBinding('style.flex')
    public get style() {
        return `${this.grow} ${this.shrink} ${this.flex === '' ? '0' : this.flex}%`;
    }
}