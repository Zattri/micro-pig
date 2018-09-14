import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatSidenavModule, MatToolbarModule, MatListModule, MatGridListModule, MatButtonModule, MatMenuModule, MatButtonToggleModule,
  MatIconModule, MatDialogModule, MatRadioModule, MatCardModule, MatTableModule, MatSortModule, MatChipsModule, MatBadgeModule,
  MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSlideToggleModule, MatSelectModule, MatProgressSpinnerModule, MatTooltipModule,
  MatAutocompleteModule, MatExpansionModule, MatDatepickerModule, MatPaginatorModule, MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatChipsModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
