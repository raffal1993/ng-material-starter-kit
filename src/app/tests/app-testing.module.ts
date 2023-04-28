import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { appRoutes } from "../app.routes";
import { AddressFormComponentModule } from "../components/address-form/address-form.component-module";
import { AvatarComponentModule } from "../components/avatar/avatar.component-module";
import { CardComponentModule } from "../components/card/card.component-module";
import { HeaderComponentModule } from "../components/header/header.component-module";
import { HeroComponentModule } from "../components/hero/hero.component-module";
import { ProductFormComponentModule } from "../components/product-form/product-form.component-module";
import { RatingViewComponentModule } from "../components/rating-view/rating-view.component-module";
import { ReadMorePanelComponentModule } from "../components/read-more-panel/read-more-panel.component-module";
import { AddressFormTestComponent } from "./address-form.test-component";
import { AvatarTestComponent } from "./avatar.test-component";
import { CardTestComponent } from "./card.test-component";
import { HeaderTestComponent } from "./header.test-component";
import { HeroTestComponent } from "./hero.test-component";
import { ProductFormTestComponent } from "./product-form.test-component";
import { RatingViewTestingComponent } from "./rating-view.test-component";
import { ReadMorePanelTestComponent } from "./read-more-panel.test-component";

@NgModule({
  declarations: [
    HeaderTestComponent,
    AvatarTestComponent,
    CardTestComponent,
    HeroTestComponent,
    AddressFormTestComponent,
    ProductFormTestComponent,
    ReadMorePanelTestComponent,
    RatingViewTestingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    HeaderComponentModule,
    AvatarComponentModule,
    CardComponentModule,
    RatingViewComponentModule,
    ReadMorePanelComponentModule,
    HeroComponentModule,
    AddressFormComponentModule,
    ProductFormComponentModule,
  ],
  providers: [],
})
export class AppTestingModule {}
