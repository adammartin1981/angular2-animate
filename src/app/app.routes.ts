import {HomeComponent} from './pages/home/home.component';
import {AnimationComponent} from './pages/animation/animation.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path : '',
        component:HomeComponent
    },
    {
        path : 'ball',
        component:AnimationComponent
    }
];

export default RouterModule.forRoot(routes);

