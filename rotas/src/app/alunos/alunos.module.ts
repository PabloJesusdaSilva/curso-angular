import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunoRoutingModule } from './alunos.routing.module';

@NgModule ({
  imports: [
    CommonModule,
    AlunoRoutingModule
  ],
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunosDetalhesComponent
  ]
})

export class AlunoModule {}