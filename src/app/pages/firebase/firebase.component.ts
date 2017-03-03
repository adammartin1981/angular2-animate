import { Component, ViewContainerRef } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { FirebaseOperation } from 'angularfire2/database';
import { DialogService } from '../../services/dialog.service';
import { Observable } from 'rxjs';

export interface CustomFirebaseObject {
    $key?: string;
    date: string;
    name: string;
    details: string;
}

@Component({
    selector: 'app-firebase',
    templateUrl: './firebase.component.html',
    styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {

    public data$: FirebaseListObservable<Array<CustomFirebaseObject>>;

    constructor(
        private angularFire: AngularFire,
        private dialogueService: DialogService,
        private viewContainerRef: ViewContainerRef
    ) {
        this.data$ = this.angularFire.database.list('messages');
    }

    public update(x: CustomFirebaseObject):void {
        let newKeys:Array<string>;

        this.openForm(x).filter(result => result).subscribe((res: CustomFirebaseObject): void =>{

            newKeys = Object.keys(res).filter((k) => {
                return k.indexOf('$') === -1;
            });

            console.log('UPDATE', res);
            newKeys.forEach((key) => {
                console.log('DOING KEY', key);
                this.data$.update(res.$key, {
                    [key]: res[key]
                });
            });
            // Object.keys(res).map((key) => {
            //     console.log('RES', res.$key);
            //     console.log('DATA:');
            //     this.data$.update(res.$key, {
            //         [key]: res[key]
            //     });
            //
            // });
            // this.data$.update(res.$key, res);
        });
    }

    public remove(x: FirebaseOperation):void {
        this.data$.remove(x);
    }

    public add():void {
        let newCustom: CustomFirebaseObject = {
            date: new Date().toISOString(),
            name: '',
            details: ''
        };

        this.data$.push(newCustom);
    }


    private openForm(formData: any): Observable<any> {
        return this.dialogueService.formModal(formData, this.viewContainerRef);
    }

}

