import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component ({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  title = 'wedding';
  form: FormGroup;

  successMessage: boolean;

  constructor(public db: AngularFireDatabase, public fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      going: ['yes', Validators.required],
      contactnumber: ['', Validators.required],
      totalpeople: ['', Validators.required]
    })
  }
  onSubmit() {
    const {name, going, contactnumber, totalpeople} = this.form.value;
    let formRequest = { name, going, contactnumber, totalpeople };
    this.db.list('/messages').push(formRequest);
    if (this.form.valid) {
      this.form.reset();
      this.successMessage = true;
    }
  }
}
