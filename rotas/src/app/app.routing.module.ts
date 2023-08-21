import { ModuleWithProviders, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./cursos/not-found/not-found.component";

const appRounting: Routes = [
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'login', component: LoginComponent},
  { path: 'notFound', component: NotFoundComponent},
  { path: '', component: HomeComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(appRounting)],
  exports: [RouterModule]
})

export class AppRoutingModule {}