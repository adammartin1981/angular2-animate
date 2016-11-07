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

    public update(x) {
        //
        this.data$.update(x.$key, {
            date : x.date += ' Lucas was here'
        });
    }

    public remove(x:any) {
        this.data$.remove(x);
    }

    public add():void {
        this.data$.push({
            date : new Date().toISOString()
        });
    }
}
