import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogConfig, DialogComponent } from '../dialog-component/dialog.component';
import { tap } from 'rxjs/operators';

// https://medium.com/@karsonbraaten/reducing-boilerplate-code-when-using-angular-material-dialog-d27f436072d5
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private readonly DefaultParams: DialogConfig = {
    title: 'Confirmation',
    content: 'Are you sure you want to perform this activity?',
    close: 'Cancel',
    ok: 'CONFIRM'
  };

  constructor(private dialog: MatDialog) { }

  public alert(message: string, callback?: () => void): MatDialogRef<DialogComponent, any> {
    const dialog: DialogConfig = {
      title: 'Alert',
      content: message,
      close: 'OK'
    };
    const dialogRef = this.dialog.open(DialogComponent, { data: dialog });
    dialogRef
      .afterClosed()
      .pipe(tap(() => { if (callback) { callback(); } }))
      .subscribe();
    return dialogRef;
  }

  public confirm(param: DialogConfig, callback: () => void): MatDialogRef<DialogComponent, any> {
    const dialog = { ...this.DefaultParams, ...param };
    const dialogRef = this.dialog.open(DialogComponent, { data: dialog });
    dialogRef
      .afterClosed()
      .pipe(tap((data) => { if (data) { callback(); } }))
      .subscribe();
    return dialogRef;
  }

  public confirmDelete(callback: () => void): void {
    const content = 'Are you use you want to delete this entity?';
    this.confirm({ content }, callback);
  }

}
