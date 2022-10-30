import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
