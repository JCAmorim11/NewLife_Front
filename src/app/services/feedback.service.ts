import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private snackbar: MatSnackBar) { }

  showMessage(message: string){
    return this.snackbar.open(message,'Fechar',{duration: 5000,panelClass: ['snackbar']})
  }
}