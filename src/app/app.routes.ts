import { Routes } from '@angular/router';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { Component } from '@angular/core';


export const routes: Routes = [
  { path: '', component: EmployeeTableComponent },
  { path: 'create', component: EmployeeFormComponent },
  { path: 'employees', redirectTo: '', pathMatch: 'full' }
];
