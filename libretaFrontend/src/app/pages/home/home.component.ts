import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contacts: any[] = [];
  loading: boolean = false;

  constructor(private contactService: ContactService){}

  ngOnInit(): void {
    this.loading = true;
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
      this.loading = false;
    });
  }

  deleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(() => {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    });
  }

}
