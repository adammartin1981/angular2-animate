import {Component, OnInit, style, state, animate, transition, trigger} from '@angular/core';


@Component({
    selector: 'app-ball',
    templateUrl: './ball.component.html',
    styleUrls: ['./ball.component.css'],
    animations: [
        trigger('move', [
            state('right', style({
                'left':'500px',
                'background-color':'pink'
            })),
            state('left', style({
                'left':'0px'
            })),
            transition('* => *', animate(500))
        ])
    ],
})
export class BallComponent implements OnInit {

    public move:string;     // Used for the animation state

    constructor() {
    }

    ngOnInit() {
    }

    public moveBall() {
        console.log('Move Ball');
        this.move = this.move !== 'right' ? 'right' : 'left';
    }

}
