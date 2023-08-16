import { Injectable, EventEmitter} from '@angular/core'

import { LogService } from '../shared/log.service';

@Injectable()

export class CursoService {

  emitirCursoCriado = new EventEmitter<string>();
  static cursoCriado = new EventEmitter<string>();

  
  private cursos: string[] = ["Angular", "Javascript", "Typescript"];
  
  constructor(private logService: LogService) {
    console.log('CursoService');
  }

  getProdutos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCursos(curso: string): void {
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoService.cursoCriado.emit(curso);
  }
}