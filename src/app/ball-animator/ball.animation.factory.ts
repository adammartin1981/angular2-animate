import {style, AnimationEntryMetadata, state, keyframes, animate, transition, trigger} from '@angular/core';

export class BallAnimationFactory {
    public static createUpDownAnimation(triggerName:string):AnimationEntryMetadata {
        return trigger(triggerName, [
            state('top', style({
                'top':'0px'
            })),
            state('bottom', style({
                'top':'0px'
            })),
            state('void', style({
                'top':'0px'
            })),
            transition('top <=> bottom', animate(2000, keyframes([
                style({ 'top':'0px'}),
                style({ 'top':'5px'}),
                style({ 'top':'10px'}),
                style({ 'top':'50px'}),
                style({ 'top':'10px'}),
                style({ 'top':'5px'}),
                style({ 'top':'0px'})

            ])))
        ]);
    }

    public static createLeftRightAnimation(triggerName:string):AnimationEntryMetadata {
        return trigger(triggerName, [
            // state('void', style({
            //     'left':'125px'
            // })),
            state('right', style({
                'left':'100%',
                'margin-left':'-50px'
            })),
            state('left', style({
                'left':'0px'
            })),
            state('void', style({
                'left':'0px'
            })),

            // transition('void => *', animate(5000)),
            // transition('left <=> right', animate('2s 0s cubic-bezier(0.68, -0.55, 0.265, 1.55)')),
            transition('left <=> right', animate('2s 0s ease-in-out')),
            // transition('void => right', animate('2s 0s cubic-bezier(0.68, -0.55, 0.265, 1.55)'))
        ]);

    }
}