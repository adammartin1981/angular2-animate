import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

interface CustomFirebaseObject {
    $key?: string;
    date: string;
}


@Component({
    selector: 'app-fire-base-detail',
    templateUrl: 'fire-base-detail.component.html',
    styleUrls: ['fire-base-detail.component.css']
})
export class FireBaseDetailComponent implements OnInit {

    @Input()
    public fireItem: CustomFirebaseObject;

    @Output()
    public delete: EventEmitter<CustomFirebaseObject> = new EventEmitter();

    @Output()
    public edit: EventEmitter<CustomFirebaseObject> = new EventEmitter();

    constructor() {
    }

    public ngOnInit() {
    }

    public deleteClick() {
        console.log('DELETE ', this.fireItem);
        this.delete.emit(this.fireItem);
    }

    public editClick() {
        console.log('EDIT');
        this.edit.emit(this.fireItem);
    }
}


