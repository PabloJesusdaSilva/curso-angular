import { Component, OnInit } from '@angular/core';

import { CursoService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  cursosService: CursoService;

  constructor(_cursosService: CursoService) {
    //this.cursosService = new CursoService();
    this.cursosService = _cursosService
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getProdutos();
  }

}
