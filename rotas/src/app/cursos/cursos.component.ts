import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  
  cursos: any[] = [];
  pagina: number = 0;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();

    this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    })
  }

  proxPagina() {
    this.router.navigate(['/cursos'],
      {queryParams: { 'Pagina': ++this.pagina}}
    );
  }
}
