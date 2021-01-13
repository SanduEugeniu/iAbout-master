import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {SimplePagesModule} from './simple-pages/simple-pages.module';
import {DashboardModule} from './dashboard/dashboard.module';
import { PostComponent } from './post/post.component';
import {PostModule} from './post/post.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PostModule,
    DashboardModule,
    SimplePagesModule,
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
