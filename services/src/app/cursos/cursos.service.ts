import { Injectable, EventEmitter} from '@angular/core'

@Injectable()

export class CursoService {

  emitirCursoCriado = new EventEmitter<string>();
  static cursoCriado = new EventEmitter<string>();

  
  private cursos: string[] = ["Angular", "Javascript", "Typescript"];
  
  /*constructor(private logService: LogService) {
    console.log('CursoService');
  }*/

  getProdutos() {
    return this.cursos;
  }

  addCursos(curso: string): void {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoService.cursoCriado.emit(curso);
  }
}