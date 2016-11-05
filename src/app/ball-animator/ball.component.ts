import { Component } from '@angular/core';
import { BallAnimationFactory } from './ball.animation.factory';

@Component({
    selector: 'app-ball-animator',
    templateUrl: './ball.component.html',
    styleUrls: ['./ball.component.css'],
    animations: [
        BallAnimationFactory.createUpDownAnimation('vertical'),
        BallAnimationFactory.createLeftRightAnimation('move')
    ],
})
export class BallAnimatorComponent {

    public move:string = 'left';     // Used for the animation state
    public vertical:string = 'top';     // Used for the animation state

    public moveBall() {
        this.move = this.move !== 'right' ? 'right' : 'left';
        this.vertical = this.vertical !== 'top' ? 'top' : 'bottom';
    }

}
