import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/topromise';

@Injectable()
export class DataService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string){
    let promise = new Promise( (resolve, reject) => {
      let apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiUrl)
        .toPromise()
        .then( res => {
          this.results = res.json().results;
          resolve();
        },
          msg => {
            reject();
        }
    )
        });
        return promise;
  }

}
