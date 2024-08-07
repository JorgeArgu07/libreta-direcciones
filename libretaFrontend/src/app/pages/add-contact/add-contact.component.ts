import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css'
})
export class AddContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(255)]],
      telefonos: this.fb.array([this.createTelefono()]),
      emails: this.fb.array([this.createEmail()]),
      direcciones: this.fb.array([this.createDireccion()])
    });
  }

  get telefonos() {
    return this.contactForm.get('telefonos') as FormArray;
  }

  get emails() {
    return this.contactForm.get('emails') as FormArray;
  }

  get direcciones() {
    return this.contactForm.get('direcciones') as FormArray;
  }

  createTelefono(): FormGroup {
    return this.fb.group({
      numero: ['', Validators.required]
    });
  }

  addTelefono() {
    this.telefonos.push(this.createTelefono());
  }

  removeTelefono(index: number) {
    this.telefonos.removeAt(index);
  }

  createEmail(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addEmail() {
    this.emails.push(this.createEmail());
  }

  removeEmail(index: number) {
    this.emails.removeAt(index);
  }

  createDireccion(): FormGroup {
    return this.fb.group({
      direccion: ['', Validators.required]
    });
  }

  addDireccion() {
    this.direcciones.push(this.createDireccion());
  }

  removeDireccion(index: number) {
    this.direcciones.removeAt(index);
  }

  onSubmit() {
    console.log(this.contactForm.value)
    if (this.contactForm.valid) {
      this.contactService.createContact(this.contactForm.value as Contact).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
