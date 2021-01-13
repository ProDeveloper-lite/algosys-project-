import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { MatButtonToggleModule } from '@angular/material/button-toggle';
 import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ErrorStateMatcher, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
 import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
 import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [
        CommonModule,
         MatToolbarModule,
         MatMenuModule,
         MatButtonModule,
         MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatProgressBarModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatChipsModule
    ],
    exports: [
        MatToolbarModule,
         MatMenuModule,
         MatButtonModule,
         MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatProgressBarModule,
        MatButtonToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatChipsModule
    ],
    declarations: []
})
export class NgMaterialModule { }
