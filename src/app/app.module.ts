import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { IconComponent } from "../icon/icon.component";
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent,IconComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
