import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  async notification( message: string, color?: string ) {
    const modal = await this.toastCtrl.create({
      color,
      message,
      duration: 3000,
      buttons: [
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });

    await modal.present();
  }

  async confirmDelete( item: string ): Promise<boolean> {
    const alert = await this.alertCtrl.create({
      header: `¿Estas seguro de eliminar este ${ item }?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: resp => {
          }
        },
        {
          text: 'Eliminar',
          role: 'delete',
          handler: resp => {
          }
        }
      ]
    });
    await alert.present();
    return await alert.onWillDismiss().then(resp => {
      if ( resp.role === 'delete' ) {
        return true;
      } else {
        return false;
      }
    });
  }

}
