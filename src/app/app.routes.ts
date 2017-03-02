import {HomeComponent} from './pages/home/home.component';
import {AnimationComponent} from './pages/animation/animation.component';
import {RouterModule} from '@angular/router';
import {DragComponent} from "./pages/drag/drag.component";
import {FirebaseComponent} from './pages/firebase/firebase.component';
import {AuthGuard} from './guards/firebase.authguard';
import {LoginComponent} from './pages/login/login.component';

const routes = [
    {
        path : '',
        component:HomeComponent
    },
    {
        path : 'ball',
        component:AnimationComponent
    },
    {
        path : 'drag',
        component:DragComponent
    },
    {
        path : 'fire',
        component:FirebaseComponent,
        canActivate:[AuthGuard]
    },
    {
        path : 'login',
        component: LoginComponent
    }
];

export const Routing = RouterModule.forRoot(routes);

