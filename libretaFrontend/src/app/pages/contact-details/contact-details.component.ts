import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const contactId = +params['id'];
      this.loadContact(contactId);
    });
  }

  loadContact(id: number): void {
    this.contactService.getContact(id).subscribe(contact => {
      this.contact = contact;
    });
  }
}
