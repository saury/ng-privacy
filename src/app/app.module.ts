declare var require: any;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FramesetComponent } from './frameset/frameset.component';
import { PanelComponent } from './panel/panel.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { PanelBodyComponent } from './panel-body/panel-body.component';
import { PanelFooterComponent } from './panel-footer/panel-footer.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ScrollDirective } from './scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    FramesetComponent,
    PanelComponent,
    PanelHeaderComponent,
    PanelBodyComponent,
    PanelFooterComponent,
    SafeHtmlPipe,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
