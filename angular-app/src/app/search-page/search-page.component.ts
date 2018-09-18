import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';
import { EventEmitter } from 'events';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  @Output() searchText = new EventEmitter();

  searchForm: FormGroup;

  displayedColumns: string[] = ['text'];
  dataSource = null;

  getUrl = 'http://localhost:3000';
  postUrl = 'http://localhost:3000/search';

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService
  ) {  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchText: new FormControl('')
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
      this.dataSource = res;
      console.log(res);
    });
  }
}