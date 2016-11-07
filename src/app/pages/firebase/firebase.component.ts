import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-firebase',
    templateUrl: './firebase.component.html',
    styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {

    public data$:FirebaseListObservable<any>;

    constructor(private angularFire: AngularFire) {
        this.data$ = this.angularFire.database.list('messages');
    }

    public update(x):void {
        //
        this.data$.update(x.$key, {
            date : x.date += ' Added Value'
        });
    }

    public remove(x:any):void {
        this.data$.remove(x);
    }

    public add():void {
        this.data$.push({
            date : new Date().toISOString()
        });
    }
}
