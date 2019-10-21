import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable()
export class NotifyService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string): Observable<MatSnackBarDismiss> {
    return this.snackBar.open(message, 'Ok', {
      duration: 2000,
    }).afterDismissed();
  }
}
