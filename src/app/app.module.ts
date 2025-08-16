import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PaperPublishingComponent } from './components/paper-publishing/paper-publishing.component';
import { BTechProjectsComponent } from './components/b-tech-projects/b-tech-projects.component';
import { BriefProjectComponent } from './components/brief-project/brief-project.component';
import { WorkshopComponent } from './components/workshop/workshop.component';
import { InternshipComponent } from './components/internship/internship.component';
import { EmbeddedComponent } from './components/embedded/embedded.component';
import { StartProjectComponent } from './components/start-project/start-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PaperPublishingComponent,
    BTechProjectsComponent,
    BriefProjectComponent,
    WorkshopComponent,
    InternshipComponent,
    EmbeddedComponent,
    StartProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
