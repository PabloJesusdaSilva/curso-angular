import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { CursoService } from './curso.service';

@NgModule ({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    NotFoundComponent
  ],
  providers: [CursoService]
})

export class CursosModule {}