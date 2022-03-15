import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavTutorialComponent } from './components/sidenav-tutorial/sidenav-tutorial.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  // { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '', redirectTo: '/sidenavT', pathMatch: 'full' },
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'sidenavT', component: SidenavTutorialComponent },
  { path: 'todolist', component: WrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
