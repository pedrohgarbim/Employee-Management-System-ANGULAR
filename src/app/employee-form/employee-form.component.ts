import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: ''
  }

  errorMessage: string = ""

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onSubmit(): void {
    // creating
    this.employeeService.createEmployee(this.employee)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = `Error occured during creating (${err.status})`;
        }
      });
  }

}
