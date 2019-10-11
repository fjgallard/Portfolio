import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from 'src/app/models/message.model';

@Injectable()
export class MessagingService {

  constructor(private afs: AngularFirestore) {}

  sendMessage(message: Message) {
    const messageCollection: AngularFirestoreCollection<Message> = this.afs.collection('messages');
    messageCollection.add({
      ...message
    });
  }
}
