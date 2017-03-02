import { Component, ViewContainerRef } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { FirebaseOperation } from 'angularfire2/database';
import { DialogService } from '../../services/dialog.service';
import { Observable } from 'rxjs';

export interface CustomFirebaseObject {
    $key?: string;
    date: string;
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
        this.openForm(x).filter(result => result).subscribe((res: any): void =>{
            this.data$.update(res.$key, {
                date : res.date
            });
        });
    }

    public remove(x: FirebaseOperation):void {
        this.data$.remove(x);
    }

    public add():void {
        let newCustom: CustomFirebaseObject = {
            date : new Date().toISOString()
        };

        this.data$.push(newCustom);
    }


    public openForm(formData: any): Observable<any> {
        return this.dialogueService.formModal(formData, this.viewContainerRef);
    }

}

