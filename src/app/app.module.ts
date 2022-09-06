import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { GlobeViewComponent } from './globe-view/globe-view.component';
import { SnapTestComponent } from './snap-test/snap-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieViewComponent,
    GlobeViewComponent,
    SnapTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
