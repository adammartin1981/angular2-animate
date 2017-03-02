import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BallAnimatorComponent} from './ball-animator/ball.component';
import {ButtonsModule, DropdownModule, CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import {HomeComponent} from './pages/home/home.component';
import {AnimationComponent} from './pages/animation/animation.component';

import { NavComponent } from './sections/nav/nav.component';
import { DragComponent } from './pages/drag/drag.component';
import { BallComponent } from './ui/ball/ball.component';
import { BallDragComponent } from './ui/ball-drag/ball-drag.component';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {firebaseConfig} from './environment/firebase.config';
import { FirebaseComponent } from './pages/firebase/firebase.component';
import {AuthGuard} from './guards/firebase.authguard';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './pages/login/login.component';
import {LoginService} from './services/login.service';
import {MaterialModule} from '@angular/material';
import {FlexDirective} from './directives/flex.directive';
import {LayoutDirective} from './directives/layout.directive';
import { Routing } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AnimationComponent,
        NavComponent,
        DragComponent,
        BallComponent,
        BallAnimatorComponent,
        BallDragComponent,
        FirebaseComponent,
        LoginComponent,
        FlexDirective,
        LayoutDirective

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonsModule,
        CollapseModule,
        DropdownModule,

        Routing,
        AngularFireModule.initializeApp(firebaseConfig, {
            provider : AuthProviders.Google,
            method : AuthMethods.Popup
        }),
        MaterialModule.forRoot()
    ],
    providers: [
        AuthGuard,
        AuthService,
        LoginService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
