import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { TimeTablePage } from './pages/time-table/time-table.page';
import { VisitPage } from './pages/visit/visit.page';
import { TeacherProfilePage } from './pages/teacher-profile/teacher-profile.page';
import { GroupPage } from './pages/group/group.page';

@NgModule({
  declarations: [AppComponent, LoginPage, TimeTablePage, VisitPage, TeacherProfilePage, GroupPage],
  entryComponents: [],
  imports: [BrowserModule, ReactiveFormsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
