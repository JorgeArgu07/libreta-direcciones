export interface Telefono {
    id?: number;
    numero: string;
  }
  
  export interface Email {
    id?: number;
    email: string;
  }
  
  export interface Direccion {
    id?: number;
    direccion: string;
  }
  
export interface Contact {
    id?: number;
    nombre: string;
    telefonos: Telefono[];
    emails: Email[];
    direcciones: Direccion[];
  }