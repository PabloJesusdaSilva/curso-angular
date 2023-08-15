import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { CursoService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [CriarCursoComponent],
  providers: [CursoService]
})
export class CriarCursoModule { }
