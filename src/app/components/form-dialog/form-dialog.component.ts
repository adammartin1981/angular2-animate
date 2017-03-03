import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators }            from '@angular/forms';
import { CustomFirebaseObject } from '../../pages/firebase/firebase.component';

@Component({
    selector: 'app-form-dialog',
    templateUrl: 'form-dialog.component.html',
    styleUrls: ['form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
    // Set from the modal
    public formData: any;
    public group: FormGroup;

    public keys:Array<string>;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MdDialogRef<FormDialogComponent>
    ) {
    }

    public ngOnInit(): void {
        this.createForm();
    }

    private createForm(): void {
        this.keys = Object.keys(this.formData).filter((key) => {
            if (key.indexOf('$') === -1) {
                return true;
            }
            return false;
        });

        let groupObject = {}

        this.keys.forEach((key) => {
            groupObject[key] = this.formData[key]
        });

        groupObject['$key'] = this.formData.$key;

        this.group = this.formBuilder.group(groupObject);
    }

    public submit() {
        this.dialogRef.close(this.group.value);
    }

    public close() {
        this.dialogRef.close();
    }
}
