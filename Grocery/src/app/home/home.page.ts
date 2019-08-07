import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Grocery List";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService, public socialSharing: SocialSharing) {

  }
  loadItems(){
    return this.dataService.getItems();
  }

  shareItem(item){
    console.log("Sharing Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Sharing Item - ' + item.name + "...",
      duration: 3000
    });
    toast.present();

    let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    this.socialSharing.share().then(() => {
      console.log("Shared Successfully");
    }).catch(() => {
      console.error("Error while sharing", error);

    });

  }

  removeItem(item){
    console.log("Removing Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Removing Item - ' + item.name + "...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeItem(index);

  }

  editItem(item){
    console.log("Edit Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Editing Item - ' + item.name + "...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }

  addItem(){
    console.log("Adding Item");
    this.inputDialogService.showPrompt();

  } 
}
