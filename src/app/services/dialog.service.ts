import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { FormDialogComponent } from '../components/form-dialog/form-dialog.component';

@Injectable()
export class DialogService {

    constructor(private dialog: MdDialog) {
    }

    public confirm(
        title: string,
        message: string,
        viewContainerRef: ViewContainerRef
    ): Observable<boolean> {
        let dialogRef: MdDialogRef<ConfirmDialogComponent>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(ConfirmDialogComponent, config);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }

    public formModal(
        formData: any,
        viewContainerRef: ViewContainerRef
    ): Observable<any> {

        console.log('FORM DATA', formData);
        let dialogRef: MdDialogRef<FormDialogComponent>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(FormDialogComponent, config);

        dialogRef.componentInstance.formData = Object.assign({}, formData);

        // Add form to the dialogRef here

        return dialogRef.afterClosed();
    }

}
