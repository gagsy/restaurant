import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend/frontend.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BackendComponent } from './backend/backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component';
const routes: Routes = [
		 { 
        path: '', 
        component: FrontendComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'home', component: HomeComponent },
          { path: 'contact', component: ContactComponent }
        ]
    },
	{
		path:'',
		component:BackendComponent,
		children:[
		{path:'dashboard',component:DashboardComponent,pathMatch: 'full'},
		{path:'blog',component:BlogComponent}
		]
	}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
