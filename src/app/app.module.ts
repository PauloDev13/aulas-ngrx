import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './component/blog/add-blog/add-blog.component';
import { BlogComponent } from './component/blog/blog.component';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { CounterComponent } from './component/counter/counter.component';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { HomeComponent } from './component/home/home.component';
import { MenuToolbarComponent } from './component/menu-toolbar/menu-toolbar.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { BlogEffects } from './shared/store/blog/blog.effects';
import { AppEffects } from './shared/store/global/app.effects';
import { AppState } from './shared/store/global/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    MenuToolbarComponent,
    CounterComponent,
    HomeComponent,
    BlogComponent,
    AddBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(AppState),
    EffectsModule.forRoot([BlogEffects, AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
