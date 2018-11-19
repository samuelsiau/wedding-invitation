import { AngularFireStorageModule } from '@angular/fire/storage';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';

// export interface Item {
//   name: string;
//   going: number;
//   totalpeople: number;
//   contactnumber: number;
// }

@Component({
  selector: 'app-totalpage',
  templateUrl: './totalpage.component.html',
  styleUrls: ['./totalpage.component.scss']
})
export class TotalpageComponent implements OnInit {
  messages: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.messages = db.list('messages').valueChanges();
  }

  ngOnInit() {
  }

}
