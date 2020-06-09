import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { TimeTablePage } from './pages/time-table/time-table.page';
import { VisitPage } from './pages/visit/visit.page';
import { CausePage } from './pages/cause/cause.page';
import { TeacherProfilePage } from './pages/teacher-profile/teacher-profile.page';
import { GroupPage } from './pages/group/group.page';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'time-table', component: TimeTablePage },
  { path: 'visit', component: VisitPage },
  { path: 'cause', component: CausePage },
  { path: 'teacher-profile', component: TeacherProfilePage },
  { path: 'group', component: GroupPage },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
