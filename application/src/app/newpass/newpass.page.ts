import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.page.html',
  styleUrls: ['./newpass.page.scss'],
})
export class NewpassPage implements OnInit {
  constructor(private toastController: ToastController) {}
  async presentToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Enlace enviado',
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  ngOnInit() {}
}
