import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactForm: FormGroup;
  contactId: number;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      telefonos: this.fb.array([]),
      emails: this.fb.array([]),
      direcciones: this.fb.array([])
    });

    this.contactId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.contactService.getContact(this.contactId).subscribe(contact => {
      this.contactForm.patchValue({
        nombre: contact.nombre
      });
      this.setTelefonos(contact.telefonos);
      this.setEmails(contact.emails);
      this.setDirecciones(contact.direcciones);
    });
  }

  get telefonos(): FormArray {
    return this.contactForm.get('telefonos') as FormArray;
  }

  get emails(): FormArray {
    return this.contactForm.get('emails') as FormArray;
  }

  get direcciones(): FormArray {
    return this.contactForm.get('direcciones') as FormArray;
  }

  setTelefonos(telefonos: any[]): void {
    telefonos.forEach(t => this.telefonos.push(this.fb.group({
      numero: [t.numero, Validators.required]
    })));
  }

  setEmails(emails: any[]): void {
    emails.forEach(e => this.emails.push(this.fb.group({
      email: [e.email, [Validators.required, Validators.email]]
    })));
  }

  setDirecciones(direcciones: any[]): void {
    direcciones.forEach(d => this.direcciones.push(this.fb.group({
      direccion: [d.direccion, Validators.required]
    })));
  }

  addTelefono(): void {
    this.telefonos.push(this.fb.group({
      numero: ['', Validators.required]
    }));
  }

  addEmail(): void {
    this.emails.push(this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    }));
  }

  addDireccion(): void {
    this.direcciones.push(this.fb.group({
      direccion: ['', Validators.required]
    }));
  }

  removeTelefono(index: number): void {
    this.telefonos.removeAt(index);
  }

  removeEmail(index: number): void {
    this.emails.removeAt(index);
  }

  removeDireccion(index: number): void {
    this.direcciones.removeAt(index);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.updateContact(this.contactId, this.contactForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
