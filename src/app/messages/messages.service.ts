import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from './message.model';
import { switchMap } from 'rxjs/operator/switchMap';

@Injectable()
export class MessagesService {
  messagesCollection: AngularFirestoreCollection<any>;
  messages: Observable<any>;

  constructor(private db: AngularFirestore) {
    this.messagesCollection = this.db.collection('messages', ref => {
      return ref.orderBy('timestamp', 'desc');
    });
    this.messages = this.messagesCollection.valueChanges().pipe(
      map(messages => {
        return messages.map(message => {
          return {...message, body: this.convertBody(message.body)}
        });
      })
    );
  }

  private convertBody(text: string) {
    let images = [];
    let links = [];

    const linksRegex = /(https?:\/\/[^\s]+)/g;
    const imagesRegex = /(https?:\/\/\S+(\.png|\.jpg|\.gif))/g;

    let foundImage = imagesRegex.exec(text);
    if (foundImage && foundImage[1]) {
      images.push(foundImage[1]);
    }

    text = text.replace(linksRegex, function(url) {
      links.push(url);
      return '<a target="_blank" href="' + url + '">' + url + '</a>';
    });

    return {
      text,
      images,
      links
    };
  }

  sendMessage(message: Message) {
    this.messagesCollection.add(message);
  }
}
