import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') form:any;
  term: string;
  loading: boolean = false;

  constructor(private itunes: DataService) { }

  ngOnInit() {
  }

  search(){
    this.loading = true;
    this.itunes.search(this.term).then( () => this.loading = false)
    this.form.reset();
  }

}
