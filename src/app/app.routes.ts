import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './Pages/portfolio/portfolio.component';
import { AppComponent } from './Pages/Main/app.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';
export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  {path: 'contact', component:ContactComponent}
  ,{path:'home', component:HomeComponent}
  ,{ path: '**', component:HomeComponent, pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
