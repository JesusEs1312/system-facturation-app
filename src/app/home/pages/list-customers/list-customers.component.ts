import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../interfaces/customer.interface';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  public customers: Customer[] = [];

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      {
        next: (customers) => {
          this.customers = customers;
          console.log(this.customers);
        }
      }
    );
  }

}
