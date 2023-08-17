import { routing } from './../app.routing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, subscribeOn} from 'rxjs';

import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: number = 0;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
    ) {
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.curso = this.cursoService.getCurso(this.id);

        if( this.curso == null) {
          this.router.navigate(['notFound']);
        }
      });
  }

  ngOnDestroy(): void {
    this.route.params.subscribe();
  }
}
