import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private config: MatSnackBarConfig;

    constructor(private snackbar: MatSnackBar) {
        this.config = {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom'
        } as MatSnackBarConfig;
    }

    private showSnackBar(message: string, type: string): void {
        const errorConfig = Object.assign({ panelClass: type }, this.config);
        const ref = this.snackbar.open(message, 'Close', errorConfig);
        ref.onAction().subscribe(() => ref.dismiss());
    }

    public error(message: string): void {
        this.showSnackBar(message, 'error');
    }

    public success(message: string): void {
        this.showSnackBar(message, 'success');
    }

    public info(message: string): void {
        this.showSnackBar(message, 'info');
    }

    public codeError(message: string): void {
        this.showSnackBar(`code error: ${message}`, 'codeerror');
    }
}
