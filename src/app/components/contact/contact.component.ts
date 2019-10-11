import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagingService } from 'src/app/services/messaging.service';
import { Message } from 'src/app/models/message.model';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessagingService,
    private notifyService: NotifyService) {
  }

  ngOnInit() {
    this.initContactForm();
  }

  send() {
    const message: Message = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    this.messageService.sendMessage(message).then(() => {
      this.initContactForm();
      this.notifyService.openSnackBar('Message sent!');
    });
  }

  private initContactForm() {
    this.contactForm = this.fb.group({
      name: '',
      email: '',
      message: ''
    });
  }
}
