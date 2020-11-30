import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconComponent } from "../icon/icon.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//font-awesome
import {} from "@fortawesome/angular-fontawesome";
//toaster
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, IconComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
