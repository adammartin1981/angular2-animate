import {HomeComponent} from './pages/home/home.component';
import {AnimationComponent} from './pages/animation/animation.component';
import {RouterModule} from '@angular/router';
import {DragComponent} from "./pages/drag/drag.component";

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
    }
];

export default RouterModule.forRoot(routes);

