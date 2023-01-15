import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
// import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule} from '@angular/forms'




// material UI
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTable} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule, 
    
    // material UI
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule
   
  
  ],
  exports : [
    HeaderComponent,
    SpinnerComponent,
    RouterModule,
    SelectComponent, 
    FormsModule, 

    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTable,

  ]
})
export class SharedModule { }
