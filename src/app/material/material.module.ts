import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule, MatCardModule],
})
export class MaterialModule {}
