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

  getUrl = 'http://localhost:9200/_cat/indices?v';
  postUrl = 'http://localhost:9200/search/company-pvqs/_search';

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
    console.log(this.searchForm.value);
    this.searchService.post(this.postUrl, this.searchForm.value);
  }

  getForm() {
    console.log(this.searchForm.value);
    const result = this.searchService.get(this.getUrl);
    console.log(result);
  }
}
