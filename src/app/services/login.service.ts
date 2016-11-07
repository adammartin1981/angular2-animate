import {Injectable} from '@angular/core';
import {AuthProviders, AngularFire} from 'angularfire2';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

    constructor(
        private angularFire:AngularFire,
        private router:Router
    ) {
    }

    public redirectUrl:string = '';

    public login():void {
        Observable.of(this.angularFire.auth.login({
            provider: AuthProviders.Google
        })).toPromise().then(() => {
            this.router.navigate([ this.redirectUrl ? this.redirectUrl : '/']);
        });
    }

    public logout():void {
        console.log('LOGOUT CALLED');
        this.router.navigate(['/']);
        this.angularFire.auth.logout();
    }
}
