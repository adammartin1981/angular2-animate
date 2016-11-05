import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BallAnimatorComponent} from './ball-animator/ball.component';
import {ButtonsModule, DropdownModule, CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import {HomeComponent} from './pages/home/home.component';
import {AnimationComponent} from './pages/animation/animation.component';
import routes from './app.routes';
import { NavComponent } from './sections/nav/nav.component';
import { DragComponent } from './pages/drag/drag.component';
import { BallComponent } from './ui/ball/ball.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AnimationComponent,
        NavComponent,
        DragComponent,
        BallComponent,
        BallAnimatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonsModule,
        CollapseModule,
        DropdownModule,
        routes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
