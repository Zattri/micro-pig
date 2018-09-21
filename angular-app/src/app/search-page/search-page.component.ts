import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { EventEmitter } from 'events';
import { SearchService } from '../services/search.service';
import { tap } from 'rxjs/operators';

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

  customerColumns: string[] = ['name', 'age', 'email', 'telephone', 'company', 'postcode', 'address'];
  productColumns: string[] = ['name', 'product_id', 'stock', 'price'];
  dataSource = null;
  sourceType = null;

  getUrl = 'http://localhost:3000';
  postUrl = 'http://localhost:3000/search';

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) {  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchText: new FormControl(''),
      databaseSelect: new FormControl('Database')
    });
  }

  postForm() {
    this.searchService.post(this.postUrl, this.searchForm.value)
    .subscribe(res => {
      this.dataSource = res;
      console.log(res);
    });
  }

  getForm() {
    this.searchService.get(this.getUrl)
    .subscribe(res => {
      console.log('Got back from thing');
      this.dataSource = res;
      console.log(res);
    });
  }

  getDatabase() {
    const microservice = this.searchForm.controls.databaseSelect.value;
    this.searchService.get(`${this.getUrl}/${microservice}/fetchall`)
    .subscribe(res => {
      this.dataSource = res;
      this.sourceType = microservice;
    });
  }
}
