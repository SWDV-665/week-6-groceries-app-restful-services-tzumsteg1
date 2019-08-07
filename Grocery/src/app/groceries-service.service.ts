import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items = [];

  constructor() { 
    console.log('Hellow GroceriesServiceProvider Provider');
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

  getItems(){
    return this.items;
  }
}
