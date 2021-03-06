import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
  declarations: [
    DropdownDirective
  ],
  imports: [  
    
  ],
  exports:[
    FormsModule,
    DropdownDirective,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class SharedGeneralModule { }
