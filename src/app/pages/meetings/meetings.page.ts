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
  public subscription :any;
  public leng :any;


  constructor(private auth: AuthService,
   private webservice: NotificationService,
   private toastService: ToastService,
   public data: DataService) { }

  ngOnInit() {
  this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
    });
  this.subscription = this.webservice.meetingList({"host_id":this.authUser.ID}).subscribe((res:any)=>{console.log(res);
    this.list = res.result;
    let art =  this.list.reduce((arr, item) => {
      let exists = !!arr.find(x => x.host_room_id === item.host_room_id);
      if(!exists){
          arr.push(item);
      }
      return arr;
  }, []);
   console.log(art);
   this.list = art;
   this.leng = this.list.length;

  });
 setInterval(() => {
this.doRefresh();
}, 5000);

    console.log(this.authUser);
  }

   goTo(object, start_date, end_date) {
    let now = moment().format("YYYY-MM-DDTHH:mm");
    let date = moment(start_date).format("YYYY-MM-DDTHH:mm");
    console.log(now,date);
    if (moment(now).isBefore(moment(end_date).format("YYYY-MM-DDTHH:mm")) && moment(moment(start_date).format("YYYY-MM-DDTHH:mm")).isBefore(now)) {
      this.toastService.presentToast('to activate meeting press start call');
      this.data.setData(object);
    } else {
      this.toastService.presentToast('time out of bounds');
    }
  }

  doRefresh() {
    this.subscription.unsubscribe();
    this.subscription = this.webservice.meetingList({"host_id":this.authUser.ID}).subscribe((res:any)=>{console.log(res);
      this.list = res.result;
      let art =  this.list.reduce((arr, item) => {
        let exists = !!arr.find(x => x.host_room_id === item.host_room_id);
        if(!exists){
            arr.push(item);
        }
        return arr;
    }, []);
     console.log(art);
     this.list = art;
     console.log(this.leng - this.list.length);


    });
}

}
