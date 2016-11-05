import {Component, OnInit, ElementRef} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
import {Observable} from "rxjs";

interface IPoint {
    x:number;
    y:number;
}

@Component({
    selector: 'app-drag',
    templateUrl: './drag.component.html',
    styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {
    @ViewChild('ball')
    public ball:ElementRef;
    public position:IPoint;

    constructor() {

        this.position = {
            x : 0,
            y : 0
        }
    }

    public offset:IPoint = {
        x:0,
        y:0
    }

    public ngOnInit():void {
        let down$:Observable<any> = Observable.fromEvent(this.ball.nativeElement, 'mousedown');
        let move$:Observable<any> = Observable.fromEvent(document, 'mousemove')
            .map((event:MouseEvent) => {
                return {
                    x : event.pageX - this.offset.x,
                    y : event.pageY - this.offset.y
                }
            });
        let up$:Observable<any> = Observable.fromEvent(document, 'mouseup');


        down$
            .map((event:MouseEvent) => {
                this.offset.x = event.pageX - this.position.x;
                this.offset.y = event.pageY - this.position.y;
                return event;
            })
            .switchMapTo(move$.takeUntil(up$))
            .subscribe((position:IPoint) => {
                this.position = position;
            });
    }

}
