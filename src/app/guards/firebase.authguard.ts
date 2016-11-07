import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor (
        private authService:AuthService
    ) {
        //
    }

    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ): Observable<boolean> {
        return this.authService.isAuthed( state.url );
    }
}