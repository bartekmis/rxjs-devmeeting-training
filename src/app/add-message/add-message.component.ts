import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      sender: ['', Validators.required],
      body: ['', Validators.required],
      timestamp: [null]
    });
  }

  sendMessage() {
    this.form.get('timestamp').setValue( new Date() );
    this.messagesService.sendMessage(this.form.value);
    this.form.reset();
  }

}
