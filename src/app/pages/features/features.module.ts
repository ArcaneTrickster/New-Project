import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features.routing.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [RouterModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
