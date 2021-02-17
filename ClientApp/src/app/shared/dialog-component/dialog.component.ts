import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogConfig {
    title?: string;
    content?: string;
    ok?: string;
    close?: string;
}

@Component({
    template: `
<mat-card data-testid="dialog">
    <mat-card-title> {{ dialog.title }} </mat-card-title>
    <mat-card-content>
        {{ dialog.content }}
    </mat-card-content>
    <mat-card-actions>
        <button mat-raised-button data-testid="close" (click)="dialogRef.close(false)"> {{ dialog.close }}
        </button>
        <button mat-raised-button data-testid="ok" color="primary" *ngIf="dialog.ok" (click)="dialogRef.close(true)">
            {{ dialog.ok }}
        </button>
    </mat-card-actions>
</mat-card>
   `,
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

    get dialog(): DialogConfig {
        return this.data;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DialogConfig,
        public dialogRef: MatDialogRef<DialogComponent>
    ) { }

}
