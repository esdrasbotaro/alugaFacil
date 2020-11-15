import { Injectable } from '@angular/core';

export interface Usuario {
  id: number;
  nome: string;
  username: string;
  password: string;
  email: string;
  whatsapp: number;
}

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private usuarios: Usuario[] = [
    {id: 0, nome: 'Daniel Victor de Souza', username: 'dsouza', password: '*****', email: 'souza.dvictor@gmail.com',
    whatsapp: 5511959575401}
  ];

  public find(id: number): Usuario {
    return { ...this.usuarios.find(s => s.id === id) };
  }

  constructor() { }
}
