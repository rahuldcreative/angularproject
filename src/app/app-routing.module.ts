import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomepageComponent} from'./homepage/homepage.component';
import{AboutpageComponent} from'./aboutpage/aboutpage.component';
import{ProductpageComponent} from'./productpage/productpage.component';
import{ContactpageComponent} from'./contactpage/contactpage.component';
import{HomeNewsComponent} from'./home-news/home-news.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch: 'full'},
  { path: 'homepage', component: HomepageComponent },
  { path: 'aboutpage', component: AboutpageComponent },
  { path: 'productpage', component: ProductpageComponent },
  { path: 'newspage', component: HomeNewsComponent },
  { path: 'contactpage', component: ContactpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
