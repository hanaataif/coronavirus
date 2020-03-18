import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import { BoardComponent } from './board/board.component';
import { InformationComponent } from './information/information.component';

// To use the scrolling to some page
const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};



const routes: Routes = [
  {path: 'home', component: BoardComponent},
  {path:'information',component:InformationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
