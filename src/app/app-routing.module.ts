import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PaperPublishingComponent } from './components/paper-publishing/paper-publishing.component';
import { BTechProjectsComponent } from './components/b-tech-projects/b-tech-projects.component';
import { BriefProjectComponent } from './components/brief-project/brief-project.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { InternshipComponent } from './components/internship/internship.component';
import { EmbeddedComponent } from './components/embedded/embedded.component';
import { StartProjectComponent } from './components/start-project/start-project.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AchievementsComponent } from './components/achievements/achievements.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'paper-publishing', component: PaperPublishingComponent },
  { path: ':category-projects', component: BTechProjectsComponent },
  { path: 'brief-project', component: BriefProjectComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'intership', component: InternshipComponent },
  { path: 'embedded', component: EmbeddedComponent },
  { path: 'start-project-now', component: StartProjectComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'achievements', component: AchievementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
