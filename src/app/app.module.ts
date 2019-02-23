import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { FrontHeaderComponent } from './front-header/front-header.component';
import { FrontFooterComponent } from './front-footer/front-footer.component';
import { BackendComponent } from './backend/backend.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    FrontHeaderComponent,
    FrontFooterComponent,
    BackendComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
