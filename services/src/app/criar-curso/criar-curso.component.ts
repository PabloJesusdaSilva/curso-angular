import { Component, OnInit } from '@angular/core';
import { CursoService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursoService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getProdutos();
  }

  onAddCurso(curso: string): void {
    this.cursosService.addCursos(curso);
  }
}
