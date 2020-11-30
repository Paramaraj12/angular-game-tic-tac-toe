import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconComponent } from "../icon/icon.component";
//font-awesome
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome@0.6.0"

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, IconComponent, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
