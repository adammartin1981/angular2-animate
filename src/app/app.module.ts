import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BallComponent} from './ball/ball.component';
import {ButtonsModule, DropdownModule, CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';
import {HomeComponent} from './pages/home/home.component';
import {AnimationComponent} from './pages/animation/animation.component';
import routes from './app.routes';
import { NavComponent } from './sections/nav/nav.component';

@NgModule({
    declarations: [
        AppComponent,
        BallComponent,
        HomeComponent,
        AnimationComponent,
        NavComponent
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
