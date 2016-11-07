import {Directive, HostBinding, Input} from '@angular/core';
@Directive({
    selector:'[layout]'
})
export class LayoutDirective {
    @Input()
    public layout:string;

    @HostBinding('style.display')
    display = 'flex';

    @HostBinding('style.flex-direction')
    public get direction():string{
        return (this.layout === 'column') ? 'column' : 'row';
    }
}