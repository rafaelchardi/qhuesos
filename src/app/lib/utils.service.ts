import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public toastController: ToastController ) {}

  async muestaAviso(pcaviso) {
    const toast = await this.toastController.create({
      message: pcaviso,
      duration: 2000
    });
    toast.present();
  }
}
