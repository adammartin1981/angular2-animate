import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators }            from '@angular/forms';

@Component({
    selector: 'app-form-dialog',
    templateUrl: 'form-dialog.component.html',
    styleUrls: ['form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
    // Set from the modal
    public formData: any;
    public group: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MdDialogRef<FormDialogComponent>
    ) {
    }

    public ngOnInit(): void {
        this.createForm();
    }

    private createForm(): void {
        this.group = this.formBuilder.group({
            date: [this.formData.date, Validators.required],
            $key: this.formData.$key
        });
    }

    public submit() {
        this.dialogRef.close(this.group.value);
    }

    public close() {
        this.dialogRef.close();
    }
}
