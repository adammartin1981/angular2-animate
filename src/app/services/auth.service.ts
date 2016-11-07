import {Injectable} from '@angular/core';
import {FirebaseAuth, FirebaseAuthState} from 'angularfire2';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class AuthService {

    constructor(
        private auth: FirebaseAuth,
        private router: Router,
        private loginService:LoginService
    ) {
    }

    public isAuthed(redirectTo?:string):Observable<boolean> {
        return this.auth
            .take(1)
            .map((authState: FirebaseAuthState) => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    if ( redirectTo ) {
                        this.loginService.redirectUrl = redirectTo;
                    }
                    this.router.navigate(['/login']);
                }
            });
    }
}
