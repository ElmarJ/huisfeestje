import { Observable, Subscriber } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private messageObserver: Subscriber<string>;
  public lastMessage$ = new Observable<string>(observer => this.messageObserver = observer);

  public sendMessage(text: string) {
    this.messageObserver.next(text);
  }
}
