import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [];

  dataChanged$: Observable<boolean>;
  
  private dataChangeSubject: Subject<boolean>;

  baseURL = "http://localhost:8080";

  constructor(public http: HttpClient) { 
    console.log('Hellow GroceriesServiceProvider Provider');

    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();

  }

  removeItem(index){
    this.items.splice(index, 1);
  }

  addItem(item){
    this.items.push(item);
  }

  editItem(item, index){
    this.items.[index] = item;
  }

  getItems(): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/groceries').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData( res: Response){
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = '${error.status} - ${error.statusText || ''} ${err}';
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
