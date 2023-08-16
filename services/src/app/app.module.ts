import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoService } from './cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursoCriadoComponent } from './curso-criado/curso-criado.component';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent,
    CursoCriadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CursoService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
