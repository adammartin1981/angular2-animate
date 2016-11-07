import {Component} from '@angular/core';
import {AngularFireAuth, AngularFire, AuthProviders} from 'angularfire2';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title:string = 'Hello World';
    public data$:Observable<any>;

    public user$:Observable<any>;

    constructor(
        private angularFire:AngularFire,
        private router:Router
    ) {
        let x$ = this.angularFire.database.list('messages');
        //
        // x$.subscribe((data) => {
        //     console.log('DATA', data);
        // })
        this.angularFire.auth.subscribe((user) => {
            console.log('USER', user);
        })

        this.user$ = this.angularFire.auth;

        this.data$ = this.user$
            .filter((user) => {
                return user !== null;
            })
            .switchMapTo(x$);


    }


}
