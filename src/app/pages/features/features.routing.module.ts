import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    // children: [
    //   { path: '', component: RecipeStartComponent },
    //   { path: 'new', component: RecipeEditComponent },
    //   {
    //     path: ':id',
    //     component: RecipeDetailComponent,
    //     resolve: [RecipesResolverService]
    //   },
    //   {
    //     path: ':id/edit',
    //     component: RecipeEditComponent,
    //     resolve: [RecipesResolverService]
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
