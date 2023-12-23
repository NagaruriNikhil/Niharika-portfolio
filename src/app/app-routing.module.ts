import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { UdaanComponent } from './udaan/udaan.component';
import { AboutComponent } from './about/about.component';
import { InternComponent } from './intern/intern.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path : 'portfolio', component:PortfolioComponent  },
  { path : 'resume', component:ResumeComponent},
  { path : 'udaan', component:UdaanComponent},
  {path:'about',component:AboutComponent},
  {path:'intern',component:InternComponent},
  {path:'product',component:ProductComponent},
  {path: '', redirectTo: '/about', pathMatch:'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
