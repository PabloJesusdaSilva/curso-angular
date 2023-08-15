import { Injectable } from '@angular/core'

@Injectable()

export class CursoService {
  getProdutos() {
    return ["Angular", "Javascript", "Typescript"];
  }
}