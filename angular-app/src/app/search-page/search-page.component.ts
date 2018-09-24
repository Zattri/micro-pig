import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { EventEmitter } from 'events';
import { RequestHandler } from '../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Output() searchText = new EventEmitter();

  searchForm: FormGroup;

  databases = [
    {value: 'product', viewValue: 'Product'},
    {value: 'customer', viewValue: 'Customer'}
  ];

  services = [
    {values: 'order', viewValue: 'Order service'}
  ];

  customerColumns: string[] = ['name', 'email', 'telephone', 'address', 'orders'];
  productColumns: string[] = ['name', 'product_id', 'stock', 'price'];
  dataSource = null;
  sourceType = null;

  getUrl = 'http://localhost:3000';
  postUrl = 'http://localhost:3000';

  constructor(
    private fb: FormBuilder,
    private requestHandler: RequestHandler
  ) {  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchText: new FormControl(''),
      databaseSelect: new FormControl('Database'),
      serviceSelect: new FormControl('Service')
    });
  }

  postForm() {
    this.requestHandler.post(this.postUrl, this.searchForm.controls.searchText.value)
    .subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

  getForm() {
    this.requestHandler.get(this.getUrl)
    .subscribe(res => {
      this.dataSource = res;
    });
  }

  getService() {
    console.log('Hey I called you');
    this.requestHandler.get(`http://localhost:3000/order`);
  }

  getDatabase() {
    const microservice = this.searchForm.controls.databaseSelect.value;
    this.requestHandler.get(`${this.getUrl}/${microservice}/fetchall`)
    .subscribe(res => {
      this.dataSource = res;
      this.sourceType = microservice;
    });
  }

  stringifyOrders(ordersArr) {
    let orderString = '';
    if (ordersArr[0].hasOwnProperty('item')) {
      ordersArr.forEach(object => {
        orderString += `${object.item} : ${object.quantity}, `;
      });
    } else {
      orderString = 'None';
    }
    return orderString;
  }
}
