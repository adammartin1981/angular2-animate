import {Component, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, FirebaseAuthState} from 'angularfire2';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(
        private angularFire: AngularFire,
        private loginService:LoginService,
        private router: Router
    ) {
    }

    public login(): void {
        this.loginService.login();
    }

    public logout(): void {
        this.loginService.logout();
    }
}
