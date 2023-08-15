import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CursosComponent } from './cursos.component';
import { CursoService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [CursosComponent]//,
  //providers: [CursoService]
})
export class CursoModule { }
