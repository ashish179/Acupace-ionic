import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { NotificationService } from './../../services/notification.service';
import { DataService } from './../../services/data.service';
import { ToastService } from './../../services/toast.service';
import * as moment from 'moment';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.page.html',
  styleUrls: ['./meetings.page.scss'],
})
export class MeetingsPage implements OnInit {

  public authUser: any;
  public list: any;


  constructor(private auth: AuthService,
   private webservice: NotificationService,
   private toastService: ToastService,
   public data: DataService) { }

  ngOnInit() {
  this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
    });
  this.webservice.meetingList({"host_id":this.authUser.ID}).subscribe((res:any)=>{console.log(res); this.list = res.result;});

    console.log(this.authUser);
  }

   goTo(object, start_date, end_date) {
    let now = moment();
    let date = moment.utc(start_date).local();
    this.data.setData(object);
    console.log(object);
    if (now.isBefore(end_date) && date.isBefore(now.toISOString(true))) {
      this.toastService.presentToast('to activate meeting press start call');
      this.data.setData(object);
    } else {
      this.toastService.presentToast('time out of bounds');
    }
  }

}
