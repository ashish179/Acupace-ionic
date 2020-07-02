import { Component, OnInit } from '@angular/core';
import { Directive, Renderer2, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NotificationService } from './../../services/notification.service';
import { AuthService } from './../../services/auth.service';
import { DataService } from './../../services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from './../../services/toast.service';
import { FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public authUser: any;
  public inviteForm: FormGroup;
  public list: any;
  public submitAttempt: boolean = false;
  public subscription: any;
  public bodystring: any;
  public deviceType :string;
  constructor(
    private renderer: Renderer2,
    public formBuilder: FormBuilder,
    private webservice: NotificationService,
    private auth: AuthService,
    private toastService: ToastService,
    public data: DataService,
    private deviceService: DeviceDetectorService
  ) {
    this.inviteForm = this.formBuilder.group({
      attendee_email: new FormArray([
        new FormControl('', Validators.compose([
          Validators.pattern(
            '^[a-zA-Z0-9.]+[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
          Validators.required
        ]))
      ]),
      host_meeting_start_time: ['', Validators.compose([Validators.required])],
      host_meeting_end_time: ['', Validators.compose([Validators.required])],
      channel_name: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
      console.log(typeof this.authUser);
      console.log(this.deviceService.isMobile());

    });
  }

 deviceDetect(){
   if(this.deviceService.isMobile()){this.deviceType = "mobile";}
   if(this.deviceService.isTablet()){this.deviceType = "Tablet";}
   if(this.deviceService.isDesktop()){this.deviceType = "desktop/laptop"}
 }

  Invite() {
    this.submitAttempt = true;
    console.log(this.inviteForm);
    if (this.inviteForm.valid) {
      this.deviceDetect();
      let bodystring = {
        host_id: this.authUser.ID,
        host_name: this.authUser.name,
        channel_name: this.inviteForm.get('channel_name').value,
        host_email: this.authUser.user_email,
        role: 'host',
        host_device_details: this.deviceType,
        host_meeting_start_time: moment(this.inviteForm.get('host_meeting_start_time')
          .value).format("YYYY-MM-DDTHH:mm"),
        host_meeting_end_time:  moment(this.inviteForm.get('host_meeting_end_time')
          .value).format("YYYY-MM-DDTHH:mm"),
        attendee_email: this.attendee_email.value,
      };
      console.log(bodystring);
      this.webservice.AddInvitation(bodystring).subscribe((res:any)=>{
        this.toastService.presentToast(res["message"]);
      },(error: any) => {
        this.toastService.presentToast('Network Issue.');
      });
    } else {
      console.log('error');
    }
  }

   get attendee_email(): FormArray {
    return this.inviteForm.get('attendee_email') as FormArray;
  }

  addNameField() {
    this.attendee_email.push(new FormControl('', Validators.compose([
          Validators.pattern(
            '^[a-zA-Z0-9.]+[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'
          ),
          Validators.required
        ])
      )
        );
  }

  deleteNameField(index: number) {
    if (this.attendee_email.length !== 1) {
      this.attendee_email.removeAt(index);
    }
    console.log(this.attendee_email.length);
  }

}
