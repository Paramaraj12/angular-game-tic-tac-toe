import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconComponent } from "../icon/icon.component";
@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, IconComponent],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {}
