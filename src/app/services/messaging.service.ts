import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from 'src/app/models/message.model';
import { from, Observable } from 'rxjs';

@Injectable()
export class MessagingService {

  constructor(private afs: AngularFirestore) {}

  sendMessage(message: Message): Promise<any> {
    const messageCollection: AngularFirestoreCollection<Message> = this.afs.collection('messages');
    return messageCollection.add({
      ...message
    });
  }
}
