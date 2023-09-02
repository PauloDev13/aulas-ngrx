import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonComponent } from './component/counter-button/counter-button.component';
import { CounterDisplayComponent } from './component/counter-display/counter-display.component';
import { CustomCounterComponent } from './component/custom-counter/custom-counter.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { counterReducer } from './shared/store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
