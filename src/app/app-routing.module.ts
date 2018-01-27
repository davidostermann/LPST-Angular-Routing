import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LegalComponent } from './legal/legal.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'todos', component: TodolistComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
