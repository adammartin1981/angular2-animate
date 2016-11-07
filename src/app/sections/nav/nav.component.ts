import {Component} from '@angular/core';
// import {AuthService} from '../../services/auth.service';
import {LoginService} from '../../services/login.service';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {Router, NavigationEnd} from '@angular/router';
import {MdTabChangeEvent} from '@angular/material';

const routes = {
    '/' : 0,
    '/ball' : 1,
    '/drag' : 2,
    '/fire' : 3,
    '/login' : 99
}

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    public isCollapsed: boolean = false;
    public selectedIndex:string = '0';

    constructor(
        private loginService:LoginService,
        private authService:AuthService,
        private router:Router
    ) {
       //
    }

    public ngOnInit():void {
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((events) => {
                console.log('TRIGGER', events);
                this.triggerTab(events.url);
            });
    }

    private triggerTab(url:string):void {
        this.selectedIndex = '0';
        Object.keys(routes).forEach((key) => {
            if ( key === url ) {
                // Pass over the number
                this.selectedIndex = routes[key];
            }
        });
    }

    public get isAuthed():Observable<boolean> {
        return this.authService.getAuth();
    }

    public login() {
        // Trigger the redirect
        this.loginService.login();
    }

    public logout() {
        this.loginService.logout();
    }

    public changeTab(event$:MdTabChangeEvent):void {

        console.log('EVENT2', event$);
        switch (event$.index) {
            case 0:
                this.router.navigateByUrl('/');
                break;
            case 1:
                this.router.navigateByUrl('/ball');
                break;
            case 2:
                this.router.navigateByUrl('/drag');
                break;
            case 3:
                this.router.navigateByUrl('/fire');
                break;

            default:
                console.log('e is: ', event$, 'e.index is: ', event$.index);
                break;
        }
    }

    public selectTab(event$:Event):void {
        console.log('EVENT1', event$);
    }
}
