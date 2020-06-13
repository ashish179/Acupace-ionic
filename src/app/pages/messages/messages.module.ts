import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BigScreenModule } from 'angular-bigscreen';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';

import { IonicModule } from '@ionic/angular';
import { CountdownModule } from 'ngx-countdown';
import { MessagesPage } from './messages.page';

const agoraConfig: AgoraConfig = { AppID: '0b6bb3bd52204bb694a57e4a7d407e17' };

const routes: Routes = [
  {
    path: '',
    component: MessagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    BigScreenModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AngularAgoraRtcModule.forRoot(agoraConfig),
    CountdownModule
  ],
  declarations: [MessagesPage,]
})
export class MessagesPageModule {}
