import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
 
declare var gtag:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-web';
  constructor(private router:Router)
  {
   const navEndEvents$= this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd));
   navEndEvents$.subscribe((event:NavigationEnd)=>{
      gtag('config', 'G-J9GCQW77JM',{
        'page_path':event.urlAfterRedirects
      })
    });
  }
}
