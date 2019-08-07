import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {
  constructor(public dataService: GroceriesServiceService, public alertCtrl: AlertController) {

  }
  showPrompt(item?, index?) {
    const promp = this.alertCtrl.create({
      title: item ? "Edit Item : Add Item",
      message: "Please edit item." : "Please Add Item.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            else {
              this.dataService.addItem(item);
            }
          }
            this.dataService.editItem(item, index);
        }
        }
      ]
  },
};
}
