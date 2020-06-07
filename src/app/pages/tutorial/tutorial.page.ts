import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { NotificationService } from './../../services/notification.service';
import { DataService } from './../../services/data.service';
import { ToastService } from './../../services/toast.service';
import * as moment from 'moment';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  public authUser: any;

  public list: any;
  public submitAttempt: boolean = false;
  public subscription: any;
  public bodystring: any;
  public leng :any;

  constructor(
    private webservice: NotificationService,
    private auth: AuthService,
    private toastService: ToastService,
    public data: DataService
  ) {}

  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
    });

    let email = { attendee_email: this.authUser.user_email };
    console.log(this.authUser);
    this.subscription = this.webservice
      .notificationList(email)
      .subscribe((res: any) => {
        this.list = res.result;
        console.log(this.list);
        this.list.reduce((arr, item) => {
          let exists = !!arr.find(x => x.host_room_id === item.host_room_id);
          if(!exists){
              arr.push(item);
          }
          return arr;
      }, []);
       console.log(this.list);
       this.leng = this.list.length;
      });
setInterval(() => {
   this.doRefresh();
 }, 5000);

  }

  goTo(object, start_date, end_date) {
    let now = moment();
    let date = moment.utc(start_date).local();
    console.log(now,date);
    if (now.isBefore(end_date) && date.isBefore(now.toISOString(true))) {
      this.toastService.presentToast('to activate meeting press start call');
      this.data.setData(object);
    } else {
      this.toastService.presentToast('time out of bounds');
    }
  }

  doRefresh() {
    this.subscription.unsubscribe();
    let email = { attendee_email: this.authUser.user_email };
    console.log(this.authUser);
    this.subscription = this.webservice
      .notificationList(email)
      .subscribe((res: any) => {
        this.list = res.result;
        console.log(this.list);
        this.list.reduce((arr, item) => {
          let exists = !!arr.find(x => x.host_room_id === item.host_room_id);
          if(!exists){
              arr.push(item);
          }
          return arr;
      }, []);
       console.log(this.list);
       if(this.leng < this.list.length){
         this.toastService.presentToast('you have new invitation');
       }
      });
}
}
