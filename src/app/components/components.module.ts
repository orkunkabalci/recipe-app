import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card/card.component';
@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [
    RouterModule,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      HttpClientModule,
      IonicModule,
    ],
    providers: [HttpClientModule],
  })
  export class componentsModule {}
  